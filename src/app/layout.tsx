import type { Metadata } from 'next'
import { Playfair_Display, Source_Serif_4, Inter } from 'next/font/google'
import './globals.css'
import { siteContent } from '@/content/site'
import { JsonLd } from '@/components/ui/JsonLd'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
})

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  display: 'swap',
  weight: ['400', '600'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
})

const { metadata: meta } = siteContent

export const metadata: Metadata = {
  title: {
    default: meta.title,
    template: `%s | ${meta.businessName}`,
  },
  description: meta.description,
  metadataBase: new URL(meta.url.replace('[TU_DOMINIO]', 'localhost:3000')),
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.url,
    siteName: meta.businessName,
    locale: meta.locale,
    type: 'website',
    images: [
      {
        url: meta.openGraph.image,
        width: 1200,
        height: 630,
        alt: meta.openGraph.imageAlt,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  // Listo para i18n: agregar alternates con hreflang cuando se expanda a múltiples idiomas/locales
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CL" className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={`${playfair.variable} ${sourceSerif.variable} ${inter.variable} font-serif`}>{children}</body>
    </html>
  )
}
