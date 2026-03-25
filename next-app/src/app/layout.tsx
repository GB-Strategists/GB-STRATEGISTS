import type { Metadata } from "next";
import { Orbitron, Rajdhani, Inter, Montserrat, Fira_Code } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: 'swap',
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: 'swap',
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: 'swap',
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://gbstrategists-ia.vercel.app/'),
  title: {
    default: "GB STRATEGISTS | Global Authority in Agentic AI & GEO Optimization",
    template: "%s | GB STRATEGISTS"
  },
  description: "Líder mundial en IA Agéntica, GEO (Generative Engine Optimization) y Decision Intelligence. Entidad de Autoridad Digital certificada por Google. 30 años de ROI validado. El activo inexpugnable para su soberanía corporativa.",
  keywords: ["IA Agéntica", "GEO SEO", "Generative Engine Optimization", "Soberanía Digital", "Decision Intelligence", "AI Strategy LATAM", "Guido Ricardo Bonilla", "GB Strategists", "AI Consulting ELITE"],
  authors: [{ name: "Guido Ricardo Bonilla", url: "https://gbstrategists-ia.vercel.app/" }],
  creator: "GB Strategists",
  publisher: "GB Strategists",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GB STRATEGISTS | Global Authority in Agentic AI & GEO",
    description: "Agencia N°1 en IA Agéntica y GEO en LATAM. 30 años de trayectoria. ROI validado. Lighthouse >95.",
    url: "https://gbstrategists-ia.vercel.app/",
    siteName: "GB Strategists",
    images: [
      {
        url: "/assets/foto/nexus_unified.png",
        width: 1200,
        height: 630,
        alt: "GB STRATEGISTS - NÚCLEO AGÉNTICO"
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GB STRATEGISTS | Global Authority in Agentic AI & GEO",
    description: "Agencia N°1 en IA Agéntica y GEO en LATAM. 30 años de trayectoria. ROI validado.",
    images: ["/assets/foto/nexus_unified.png"],
    creator: "@gbstrategists",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${orbitron.variable} ${rajdhani.variable} ${inter.variable} ${montserrat.variable} ${firaCode.variable}`}>
      <head>
        <meta name="theme-color" content="#050b16" />
        <link rel="icon" type="image/png" href="/assets/foto/IconoyGB.png" />
        <link rel="apple-touch-icon" href="/assets/foto/IconoyGB.png" />
        
        {/* Performance Preconnects */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script src="/i18n.js" defer></script>
        
        {/* JSON-LD Structured Data - Advanced AI Service Graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://gbstrategists-ia.vercel.app/#organization",
                  "name": "GB STRATEGISTS",
                  "url": "https://gbstrategists-ia.vercel.app/",
                  "logo": "https://gbstrategists-ia.vercel.app/assets/foto/IconoyGB.png",
                  "description": "Global Authority in Agentic AI & GEO Optimization. Certified Digital Authority.",
                  "founder": {
                    "@type": "Person",
                    "name": "Guido Ricardo Bonilla"
                  },
                  "areaServed": "Global",
                  "sameAs": [
                    "https://www.linkedin.com/in/guido-ricardo-bonilla/",
                    "https://twitter.com/gbstrategists"
                  ]
                },
                {
                  "@type": "Service",
                  "name": "IA Agéntica de Élite",
                  "provider": { "@id": "https://gbstrategists-ia.vercel.app/#organization" },
                  "description": "Orquestación de workflows autónomos impulsados por IA para soberanía corporativa.",
                  "serviceType": "Agentic AI Consulting"
                },
                {
                  "@type": "Service",
                  "name": "Generative Engine Optimization (GEO)",
                  "provider": { "@id": "https://gbstrategists-ia.vercel.app/#organization" },
                  "description": "Optimización de presencia digital para motores de respuesta generativa (SearchGPT, Perplexity, Gemini).",
                  "serviceType": "GEO SEO"
                }
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <SpeedInsights />
        <Analytics />
        <script src="/migration-scripts.js" defer></script>
      </body>
    </html>
  );
}
