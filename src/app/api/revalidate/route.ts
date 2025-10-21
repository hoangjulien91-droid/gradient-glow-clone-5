import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * ✅ Performance: API Route pour revalidation on-demand
 * Appelé par les webhooks Sanity lors de modifications de contenu
 * 
 * Usage:
 * POST /api/revalidate
 * Body: { secret: "...", tag: "posts" | "post-slug" }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, tag } = body;

    // ✅ Sécurité: Vérifier le secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' },
        { status: 401 }
      );
    }

    if (!tag) {
      return NextResponse.json(
        { message: 'Tag is required' },
        { status: 400 }
      );
    }

    // ✅ Revalidation ciblée par tag
    revalidateTag(tag);

    return NextResponse.json(
      { 
        revalidated: true, 
        tag,
        now: Date.now() 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    );
  }
}

// ✅ Performance: Utiliser Edge Runtime pour latence minimale
export const runtime = 'edge';

