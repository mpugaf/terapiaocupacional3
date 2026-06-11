/**
 * Feature flags centrales del sitio.
 *
 * Para activar una feature:
 *   1. Cambiar el flag a `true`
 *   2. Configurar las variables de entorno necesarias (ver .env.example)
 *   3. Ver README.md → "Roadmap de features" para instrucciones específicas
 */
export const features = {
  /** Botón flotante de WhatsApp. Requiere: NEXT_PUBLIC_WHATSAPP_NUMBER */
  whatsapp: true,

  /** Formulario de contacto con validación. Requiere: NEXT_PUBLIC_FORMSPREE_ENDPOINT (u opción EmailJS) */
  contactForm: false,

  /** Embed de Google Maps en sección Contacto. Requiere: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY + coordenadas */
  map: false,

  /** Botón de agenda online (cal.com / Calendly). Requiere: NEXT_PUBLIC_BOOKING_URL */
  booking: false,

  /** Blog con MDX o CMS. Ver /src/app/blog/README.md para instrucciones de activación */
  blog: false,
} as const

export type FeatureKey = keyof typeof features
