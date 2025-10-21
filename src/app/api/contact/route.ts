import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin, ContactSubmission } from '@/lib/supabase';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'julien.hoang@gmail.com';

export async function POST(request: NextRequest) {
  try {
    const body: ContactSubmission = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Les champs nom, email et message sont requis' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const { data: submission, error: dbError } = await supabaseAdmin
      .from('contact_submissions')
      .insert([
        {
          name: body.name,
          email: body.email,
          phone: body.phone || null,
          message: body.message,
        },
      ])
      .select()
      .single();

    if (dbError) {
      console.error('Supabase error:', dbError);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi du message. Veuillez réessayer.' },
        { status: 500 }
      );
    }

    // Track email sending status
    let emailSentConfirmation = false;
    let emailSentNotification = false;
    const emailSentAt = new Date().toISOString();

    // Helper to send email via Resend HTTP API (avoids SDK optional peer)
    const sendEmail = async (payload: Record<string, any>) => {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`Resend API error ${res.status}: ${text}`);
      }
      return res.json();
    };

    // Envoyer l'email de confirmation au visiteur
    try {
      await sendEmail({
        from: 'Julien Hoang - Détective Privé <onboarding@resend.dev>',
        to: body.email,
        subject: 'Message bien reçu - Julien Hoang Détective Privé',
        html: `
          <div style="font-family: Inter, Arial, sans-serif; line-height:1.6; color:#1a202c;">
            <h2 style="margin:0 0 12px;">Bonjour ${body.name},</h2>
            <p>Merci pour votre message. Je l'ai bien reçu et je reviens vers vous sous 24h (jours ouvrés).</p>
            <p style="margin-top:16px;"><strong>Votre message :</strong></p>
            <blockquote style="margin:12px 0; padding:12px 16px; background:#f7f9fc; border-left:4px solid #4A90E2;">
              ${body.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}
            </blockquote>
            <p style="margin-top:16px;">Confidentialité garantie – Vos informations sont protégées par le secret professionnel.</p>
            <p style="margin-top:24px;">Bien cordialement,<br/>Julien Hoang<br/>Détective Privé – Victimologue</p>
          </div>
        `,
      });
      emailSentConfirmation = true;
      console.log(`✅ Email de confirmation envoyé à ${body.email}`);
    } catch (emailError) {
      console.error('❌ Erreur envoi email confirmation:', emailError);
      // Continue même si l'email échoue (fallback)
    }

    // Envoyer l'email de notification à l'admin
    try {
      await sendEmail({
        from: 'Notifications <onboarding@resend.dev>',
        to: ADMIN_EMAIL,
        subject: `🔔 Nouvelle demande de contact - ${body.name}`,
        html: `
          <div style="font-family: Inter, Arial, sans-serif; line-height:1.6; color:#1a202c;">
            <h3 style="margin:0 0 8px;">Nouvelle demande de contact</h3>
            <p><strong>Nom:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            ${body.phone ? `<p><strong>Téléphone:</strong> ${body.phone}</p>` : ''}
            <p style="margin-top:12px;"><strong>Message:</strong></p>
            <pre style="white-space:pre-wrap; background:#f7f9fc; padding:12px 16px; border:1px solid #e5e7eb; border-radius:8px;">${body.message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
            <p style="margin-top:12px; color:#718096;">Reçu le: ${new Date().toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' })}</p>
          </div>
        `,
      });
      emailSentNotification = true;
      console.log(`✅ Email de notification envoyé à ${ADMIN_EMAIL}`);
    } catch (emailError) {
      console.error('❌ Erreur envoi email notification:', emailError);
      // Continue même si l'email échoue (fallback)
    }

    // Mettre à jour les colonnes de suivi des emails dans Supabase
    if (submission?.id) {
      try {
        await supabaseAdmin
          .from('contact_submissions')
          .update({
            email_sent_confirmation: emailSentConfirmation,
            email_sent_notification: emailSentNotification,
            email_sent_at: emailSentAt,
          })
          .eq('id', submission.id);
        
        console.log(`📊 Suivi emails mis à jour pour submission ${submission.id}`);
      } catch (updateError) {
        console.error('⚠️ Erreur mise à jour suivi emails:', updateError);
        // Continue même si la mise à jour du suivi échoue
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Votre message a été envoyé avec succès',
        data: submission,
        emailStatus: {
          confirmation: emailSentConfirmation,
          notification: emailSentNotification,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Erreur serveur. Veuillez réessayer plus tard.' },
      { status: 500 }
    );
  }
}