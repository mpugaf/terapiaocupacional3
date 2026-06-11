import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Servicios } from '@/components/sections/Servicios'
import { SobreMi } from '@/components/sections/SobreMi'
import { Parkinson } from '@/components/sections/Parkinson'
import { Contacto } from '@/components/sections/Contacto'
import { WhatsAppButton } from '@/components/features/WhatsAppButton'
import { features } from '@/config/features'
import { siteContent } from '@/content/site'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Servicios />
        <SobreMi />
        <Parkinson />
        <Contacto />
      </main>
      <Footer />

      {/* WhatsApp: activo cuando features.whatsapp = true. Número desde NEXT_PUBLIC_WHATSAPP_NUMBER */}
      {features.whatsapp && (
        <WhatsAppButton
          phoneNumber={
            process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ??
            siteContent.metadata.socialLinks.whatsapp ??
            ''
          }
        />
      )}
    </>
  )
}
