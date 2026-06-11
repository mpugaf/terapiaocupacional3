'use client'

import { type FormEvent, type ReactNode, useState } from 'react'
import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { features } from '@/config/features'
import { ContactForm } from '@/components/features/ContactForm'
import { MapEmbed } from '@/components/features/MapEmbed'

export function Contacto() {
  const { heading, subheading, schedule } = siteContent.contacto
  const { phone, email, address, coordinates, socialLinks } = siteContent.metadata

  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  const whatsappNumber = socialLinks.whatsapp ?? ''

  function handleWhatsApp(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const text = `Hola, soy ${nombre}. Mi WhatsApp es ${telefono}.`
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <SectionWrapper id="contacto" className="bg-cream">
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
        <p className="mx-auto max-w-2xl text-lg text-ink-muted">{subheading}</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">

        {/* Columna izquierda: formulario WhatsApp + datos de contacto */}
        <div className="space-y-5">

          {/* Formulario WhatsApp — abre conversación con mensaje pre-cargado */}
          <form
            onSubmit={handleWhatsApp}
            className="rounded bg-surface p-6"
            aria-label="Contactar por WhatsApp"
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500">
                <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <p className="font-display text-lg font-semibold text-ink">Escribir por WhatsApp</p>
            </div>

            <div className="space-y-4">
              <div>
                <label
                  htmlFor="wa-nombre"
                  className="mb-1.5 block font-sans text-sm font-medium"
                  style={{ color: 'var(--color-text-soft)' }}
                >
                  Nombre <span aria-hidden="true">*</span>
                </label>
                <input
                  id="wa-nombre"
                  name="nombre"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  className="w-full rounded px-4 py-3 font-sans transition focus:outline-none focus:ring-2"
                  style={{
                    border: '1px solid var(--color-separator)',
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-separator)')}
                />
              </div>

              <div>
                <label
                  htmlFor="wa-telefono"
                  className="mb-1.5 block font-sans text-sm font-medium"
                  style={{ color: 'var(--color-text-soft)' }}
                >
                  Tu teléfono / WhatsApp <span aria-hidden="true">*</span>
                </label>
                <input
                  id="wa-telefono"
                  name="telefono"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  placeholder="+56 9 1234 5678"
                  className="w-full rounded px-4 py-3 font-sans transition focus:outline-none focus:ring-2"
                  style={{
                    border: '1px solid var(--color-separator)',
                    backgroundColor: 'var(--color-bg)',
                    color: 'var(--color-text)',
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = 'var(--color-primary)')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'var(--color-separator)')}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded px-6 py-3 font-sans font-semibold text-cream transition focus:outline-none focus:ring-4 focus:ring-olive-300"
                style={{ backgroundColor: 'var(--color-primary)' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
              >
                Abrir WhatsApp →
              </button>
            </div>
          </form>

          <ContactCard icon="📞" label="Teléfono">
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="text-olive-500 hover:underline focus:outline-none focus:ring-2 focus:ring-olive-500"
            >
              {phone}
            </a>
          </ContactCard>

          <ContactCard icon="✉️" label="Email">
            <a
              href={`mailto:${email}`}
              className="break-all text-olive-500 hover:underline focus:outline-none focus:ring-2 focus:ring-olive-500"
            >
              {email}
            </a>
          </ContactCard>

          <ContactCard icon="📍" label="Dirección">
            <address className="not-italic text-ink-soft">
              {address.street}, {address.city}
              <br />
              {address.region}, {address.country}
            </address>
          </ContactCard>

          <ContactCard icon="🕐" label="Horario">
            <p className="text-ink-soft">{schedule}</p>
          </ContactCard>

          {!features.contactForm && (
            <div className="rounded border-2 border-dashed border-olive-200 p-5 text-center">
              <p className="font-sans text-sm text-ink-muted">
                <span className="block font-medium text-ink-soft">Formulario de contacto</span>
                Próximamente —{' '}
                <code className="rounded bg-surface px-1 text-xs">features.contactForm</code>
              </p>
            </div>
          )}
        </div>

        {/* Columna derecha: formulario avanzado y/o mapa */}
        <div className="space-y-6">
          {features.contactForm && <ContactForm />}

          {features.map ? (
            <MapEmbed lat={coordinates.lat} lng={coordinates.lng} />
          ) : (
            <div className="flex h-48 items-center justify-center rounded border-2 border-dashed border-olive-200 bg-surface">
              <p className="text-center font-sans text-sm text-ink-muted">
                <span className="block font-medium text-ink-soft">Mapa de ubicación</span>
                Próximamente —{' '}
                <code className="rounded bg-olive-100 px-1 text-xs">features.map</code>
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  )
}

interface ContactCardProps {
  icon: string
  label: string
  children: ReactNode
}

function ContactCard({ icon, label, children }: ContactCardProps) {
  return (
    <div className="flex items-start gap-4 rounded bg-surface p-5">
      <span className="shrink-0 text-2xl" aria-hidden="true">
        {icon}
      </span>
      <div>
        <p className="mb-1 font-sans text-xs font-semibold uppercase tracking-wide text-ink-muted">
          {label}
        </p>
        {children}
      </div>
    </div>
  )
}
