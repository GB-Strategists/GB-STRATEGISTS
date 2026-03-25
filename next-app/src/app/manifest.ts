import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GB STRATEGISTS | SOBERANÍA DIGITAL',
    short_name: 'GB Strategists',
    description: 'Entidad de Autoridad Digital certificada por Google. Pioneros en IA Agéntica y GEO en LATAM.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050B16',
    theme_color: '#E4A837',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
