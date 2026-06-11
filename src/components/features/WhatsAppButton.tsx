'use client'

import { type FormEvent, useState } from 'react'

interface WhatsAppButtonProps {
  /** Número con código de país sin espacios. Ej: 56912345678 */
  phoneNumber: string
}

const WHATSAPP_ICON = (
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
)

export function WhatsAppButton({ phoneNumber }: WhatsAppButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const text = `Hola, soy ${nombre}. Mi WhatsApp es ${telefono}.`
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
    setIsOpen(false)
    setNombre('')
    setTelefono('')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Popup con formulario — aparece encima del botón */}
      {isOpen && (
        <div
          className="w-72 rounded bg-cream shadow-warm"
          style={{ border: '1px solid var(--color-separator)' }}
          role="dialog"
          aria-label="Formulario de contacto por WhatsApp"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between rounded-t px-5 py-4"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500">
                <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4" aria-hidden="true">
                  {WHATSAPP_ICON}
                </svg>
              </span>
              <p className="font-display text-sm font-semibold text-ink">
                Escribir por WhatsApp
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar formulario"
              className="flex h-6 w-6 items-center justify-center rounded text-ink-muted transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-olive-500"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-3 p-5">
            <div>
              <label
                htmlFor="wab-nombre"
                className="mb-1 block font-sans text-xs font-medium"
                style={{ color: 'var(--color-text-soft)' }}
              >
                Nombre <span aria-hidden="true">*</span>
              </label>
              <input
                id="wab-nombre"
                name="nombre"
                type="text"
                required
                autoComplete="given-name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Tu nombre"
                className="w-full rounded px-3 py-2 font-sans text-sm transition focus:outline-none focus:ring-2 focus:ring-olive-200"
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
                htmlFor="wab-telefono"
                className="mb-1 block font-sans text-xs font-medium"
                style={{ color: 'var(--color-text-soft)' }}
              >
                Tu WhatsApp <span aria-hidden="true">*</span>
              </label>
              <input
                id="wab-telefono"
                name="telefono"
                type="tel"
                required
                autoComplete="tel"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="+56 9 1234 5678"
                className="w-full rounded px-3 py-2 font-sans text-sm transition focus:outline-none focus:ring-2 focus:ring-olive-200"
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
              className="w-full rounded px-4 py-2.5 font-sans text-sm font-semibold text-cream transition focus:outline-none focus:ring-4 focus:ring-olive-300"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
            >
              Abrir WhatsApp →
            </button>
          </form>
        </div>
      )}

      {/* Botón flotante — abre/cierra el popup */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? 'Cerrar formulario de WhatsApp' : 'Contactar por WhatsApp'}
        aria-expanded={isOpen}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-6 w-6" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
            {WHATSAPP_ICON}
          </svg>
        )}
      </button>

    </div>
  )
}
