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
  title: "GB STRATEGISTS | Global Authority in Agentic & Disruptive AI",
  description: "GB STRATEGISTS: Agencia N°1 en IA Agéntica y GEO (Generative Engine Optimization) en LATAM. 30 años de trayectoria. ROI validado. LCP <1s. Lighthouse >95. Certificada por Google como Entidad de Autoridad Digital.",
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
  },
};

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
      </head>
      <body>
        {children}
        <script src="/migration-scripts.js" defer></script>
      </body>
    </html>
  );
}
