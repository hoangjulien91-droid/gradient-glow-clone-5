import * as React from 'react';

// ============================================================================
// EMAIL DE CONFIRMATION POUR LE VISITEUR
// ============================================================================

interface ConfirmationEmailProps {
  name: string;
  message: string;
}

export const ConfirmationEmail = ({ name, message }: ConfirmationEmailProps) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style={{ 
      margin: 0, 
      padding: 0, 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#f7f9fc',
      lineHeight: 1.6
    }}>
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f7f9fc', padding: '40px 20px' }}>
        <tr>
          <td align="center">
            <table width="600" cellPadding="0" cellSpacing="0" style={{ 
              maxWidth: '600px', 
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}>
              {/* Header avec gradient rose/violet */}
              <tr>
                <td style={{
                  background: 'linear-gradient(135deg, #FF6B6B 0%, #9333EA 100%)',
                  padding: '40px 32px',
                  textAlign: 'center'
                }}>
                  <h1 style={{
                    margin: 0,
                    color: '#ffffff',
                    fontSize: '28px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em'
                  }}>
                    Message bien reçu
                  </h1>
                </td>
              </tr>

              {/* Contenu principal */}
              <tr>
                <td style={{ padding: '40px 32px' }}>
                  <p style={{
                    margin: '0 0 24px',
                    fontSize: '16px',
                    color: '#1a202c',
                    lineHeight: 1.6
                  }}>
                    Bonjour <strong>{name}</strong>,
                  </p>

                  <p style={{
                    margin: '0 0 24px',
                    fontSize: '16px',
                    color: '#1a202c',
                    lineHeight: 1.6
                  }}>
                    J'ai bien reçu votre message et je vous remercie de votre confiance. 
                    Je reviendrai vers vous <strong style={{ color: '#FF6B6B' }}>dans les 24 heures</strong> pour discuter de votre situation en toute confidentialité.
                  </p>

                  {/* Rappel du message */}
                  <div style={{
                    backgroundColor: '#f7f9fc',
                    borderLeft: '4px solid #FF6B6B',
                    borderRadius: '8px',
                    padding: '20px 24px',
                    margin: '32px 0'
                  }}>
                    <p style={{
                      margin: '0 0 8px',
                      fontSize: '14px',
                      color: '#718096',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Votre message :
                    </p>
                    <p style={{
                      margin: 0,
                      fontSize: '15px',
                      color: '#2d3748',
                      lineHeight: 1.6,
                      fontStyle: 'italic'
                    }}>
                      {message}
                    </p>
                  </div>

                  <p style={{
                    margin: '0 0 24px',
                    fontSize: '16px',
                    color: '#1a202c',
                    lineHeight: 1.6
                  }}>
                    En attendant, n'hésitez pas à consulter mes services sur le site ou à me joindre directement en cas d'urgence.
                  </p>

                  {/* Contact direct cliquable */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    padding: '24px',
                    margin: '32px 0'
                  }}>
                    <p style={{
                      margin: '0 0 16px',
                      fontSize: '14px',
                      color: '#718096',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Besoin d'une réponse urgente ?
                    </p>

                    <div style={{ marginBottom: '12px' }}>
                      <a href="tel:+33612345678" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#FF6B6B',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 600
                      }}>
                        📞 06 12 34 56 78
                      </a>
                    </div>

                    <div>
                      <a href="mailto:julien.hoang@gmail.com" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        color: '#4A90E2',
                        textDecoration: 'none',
                        fontSize: '16px',
                        fontWeight: 500
                      }}>
                        ✉️ julien.hoang@gmail.com
                      </a>
                    </div>
                  </div>

                  <p style={{
                    margin: '32px 0 0',
                    fontSize: '16px',
                    color: '#1a202c',
                    lineHeight: 1.6
                  }}>
                    Cordialement,<br />
                    <strong>Julien Hoang</strong><br />
                    <span style={{ color: '#FF6B6B' }}>Détective Privé Victimologue</span>
                  </p>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{
                  backgroundColor: '#1a202c',
                  padding: '24px 32px',
                  textAlign: 'center'
                }}>
                  <p style={{
                    margin: '0 0 8px',
                    fontSize: '14px',
                    color: '#a0aec0'
                  }}>
                    🛡️ Agréé CNAPS • 15 ans d'expérience • Disponible 24/7
                  </p>
                  <p style={{
                    margin: 0,
                    fontSize: '12px',
                    color: '#718096'
                  }}>
                    Ce message est confidentiel et destiné uniquement à son destinataire.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
);

// ============================================================================
// EMAIL DE NOTIFICATION POUR L'ADMIN
// ============================================================================

interface NotificationEmailProps {
  name: string;
  email: string;
  phone?: string;
  message: string;
  timestamp: string;
}

export const NotificationEmail = ({ 
  name, 
  email, 
  phone, 
  message, 
  timestamp 
}: NotificationEmailProps) => (
  <html>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style={{ 
      margin: 0, 
      padding: 0, 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#1a202c',
      lineHeight: 1.6
    }}>
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#1a202c', padding: '40px 20px' }}>
        <tr>
          <td align="center">
            <table width="600" cellPadding="0" cellSpacing="0" style={{ 
              maxWidth: '600px', 
              backgroundColor: '#2d3748',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              {/* Header avec badge alerte */}
              <tr>
                <td style={{ padding: '32px 32px 24px' }}>
                  <div style={{
                    display: 'inline-block',
                    backgroundColor: '#FF6B6B',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    padding: '8px 16px',
                    borderRadius: '999px',
                    marginBottom: '16px'
                  }}>
                    🔔 Nouveau message
                  </div>

                  <h1 style={{
                    margin: 0,
                    color: '#ffffff',
                    fontSize: '24px',
                    fontWeight: 700
                  }}>
                    Nouvelle demande de contact
                  </h1>
                </td>
              </tr>

              {/* Informations du formulaire */}
              <tr>
                <td style={{ padding: '0 32px 32px' }}>
                  {/* Card avec infos visiteur */}
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td style={{
                          fontSize: '14px',
                          color: '#a0aec0',
                          fontWeight: 600,
                          paddingBottom: '8px'
                        }}>
                          👤 Nom
                        </td>
                        <td style={{
                          fontSize: '16px',
                          color: '#ffffff',
                          fontWeight: 600,
                          textAlign: 'right',
                          paddingBottom: '8px'
                        }}>
                          {name}
                        </td>
                      </tr>
                      <tr>
                        <td style={{
                          fontSize: '14px',
                          color: '#a0aec0',
                          fontWeight: 600,
                          paddingTop: '8px',
                          paddingBottom: '8px'
                        }}>
                          ✉️ Email
                        </td>
                        <td style={{
                          fontSize: '16px',
                          textAlign: 'right',
                          paddingTop: '8px',
                          paddingBottom: '8px'
                        }}>
                          <a href={`mailto:${email}`} style={{
                            color: '#4A90E2',
                            textDecoration: 'none',
                            fontWeight: 500
                          }}>
                            {email}
                          </a>
                        </td>
                      </tr>
                      {phone && (
                        <tr>
                          <td style={{
                            fontSize: '14px',
                            color: '#a0aec0',
                            fontWeight: 600,
                            paddingTop: '8px',
                            paddingBottom: '8px'
                          }}>
                            📞 Téléphone
                          </td>
                          <td style={{
                            fontSize: '16px',
                            textAlign: 'right',
                            paddingTop: '8px',
                            paddingBottom: '8px'
                          }}>
                            <a href={`tel:${phone}`} style={{
                              color: '#FF6B6B',
                              textDecoration: 'none',
                              fontWeight: 500
                            }}>
                              {phone}
                            </a>
                          </td>
                        </tr>
                      )}
                      <tr>
                        <td style={{
                          fontSize: '14px',
                          color: '#a0aec0',
                          fontWeight: 600,
                          paddingTop: '8px'
                        }}>
                          🕒 Horodatage
                        </td>
                        <td style={{
                          fontSize: '14px',
                          color: '#a0aec0',
                          textAlign: 'right',
                          paddingTop: '8px'
                        }}>
                          {timestamp}
                        </td>
                      </tr>
                    </table>
                  </div>

                  {/* Message */}
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderLeft: '4px solid #FF6B6B',
                    borderRadius: '8px',
                    padding: '20px 24px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <p style={{
                      margin: '0 0 12px',
                      fontSize: '14px',
                      color: '#a0aec0',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      💬 Message
                    </p>
                    <p style={{
                      margin: 0,
                      fontSize: '16px',
                      color: '#ffffff',
                      lineHeight: 1.6,
                      whiteSpace: 'pre-wrap'
                    }}>
                      {message}
                    </p>
                  </div>

                  {/* Action CTA */}
                  <div style={{ 
                    textAlign: 'center',
                    marginTop: '32px'
                  }}>
                    <a href={`mailto:${email}?subject=Re: Votre demande de contact`} style={{
                      display: 'inline-block',
                      background: 'linear-gradient(135deg, #4A90E2 0%, #9333EA 50%, #FF6B6B 100%)',
                      color: '#ffffff',
                      fontSize: '16px',
                      fontWeight: 600,
                      textDecoration: 'none',
                      padding: '14px 32px',
                      borderRadius: '12px',
                      boxShadow: '0 0 20px rgba(74, 144, 226, 0.3)'
                    }}>
                      Répondre à {name}
                    </a>
                  </div>
                </td>
              </tr>

              {/* Footer */}
              <tr>
                <td style={{
                  backgroundColor: '#1a202c',
                  padding: '20px 32px',
                  textAlign: 'center',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: '12px',
                    color: '#718096'
                  }}>
                    Notification automatique • Ne pas répondre à cet email
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
);