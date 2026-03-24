import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * GB STRATEGISTS - VERCEL EDGE MIDDLEWARE
 * Optimización de CDN global y headers de rendimiento.
 * Lighthouse >95 focus.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Performance Headers for Edge CDN caching
  response.headers.set('X-Edge-Source', 'GB-DNA-V4');
  response.headers.set('Vary', 'Accept-Encoding, Accept-Language');
  
  // Security & Performance
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Static content performance enhancement
  if (request.nextUrl.pathname.startsWith('/assets/')) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
