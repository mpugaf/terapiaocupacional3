// FEATURE FLAG: features.contactForm
// Para activar:
//   1. features.contactForm = true  en /src/config/features.ts
//   2. Elegir provider de email (ver README.md → "Formulario de contacto")
//   3. Configurar la variable de entorno correspondiente en .env.local
//   4. Descomentar el fetch real y eliminar el console.warn de handleSubmit

'use client'

import { type FormEvent, useState } from 'react'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const data = new FormData(e.currentTarget)

    try {
      // TODO: Reemplazar con envío real al activar la feature.
      // Opción A — Formspree (sin backend, recomendado para Fase 2):
      //   const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT!, {
      //     method: 'POST',
      //     body: data,
      //     headers: { Accept: 'application/json' },
      //   })
      //   if (!res.ok) throw new Error('Formspree error')
      //
      // Opción B — API Route propia (requiere output: 'standalone' en next.config.js):
      //   const res = await fetch('/api/contact', { method: 'POST', body: data })
      //   if (!res.ok) throw new Error('API error')

      console.warn('[ContactForm] Endpoint no configurado. Ver features.contactForm en README.')
      await new Promise((r) => setTimeout(r, 800)) // simulación para desarrollo
      setStatus('success')
      ;(e.target as HTMLFormElement).reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5 rounded bg-cream p-8 shadow-warm"
      aria-label="Formulario de contacto"
    >
      <div>
        <label htmlFor="cf-name" className="mb-1.5 block font-sans text-sm font-medium text-ink-soft">
          Nombre y apellido <span aria-hidden="true">*</span>
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded border border-olive-200 px-4 py-3 text-ink transition focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200"
          placeholder="María García"
        />
      </div>

      <div>
        <label htmlFor="cf-email" className="mb-1.5 block font-sans text-sm font-medium text-ink-soft">
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded border border-olive-200 px-4 py-3 text-ink transition focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200"
          placeholder="maria@ejemplo.com"
        />
      </div>

      <div>
        <label htmlFor="cf-phone" className="mb-1.5 block font-sans text-sm font-medium text-ink-soft">
          Teléfono <span className="text-ink-muted">(opcional)</span>
        </label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full rounded border border-olive-200 px-4 py-3 text-ink transition focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200"
          placeholder="+56 9 1234 5678"
        />
      </div>

      <div>
        <label htmlFor="cf-message" className="mb-1.5 block font-sans text-sm font-medium text-ink-soft">
          Consulta <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded border border-olive-200 px-4 py-3 text-ink transition focus:border-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-200"
          placeholder="Contame brevemente tu consulta..."
        />
      </div>

      {status === 'success' && (
        <p role="status" className="rounded bg-surface p-3 font-sans text-sm text-olive-500">
          ¡Mensaje enviado! Te responderé a la brevedad.
        </p>
      )}
      {status === 'error' && (
        <p role="alert" className="rounded bg-red-50 p-3 font-sans text-sm text-red-700">
          Hubo un error al enviar. Por favor intentá de nuevo o contactame directamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded bg-olive-500 px-6 py-3 font-sans font-semibold text-cream transition hover:bg-clay-500 focus:outline-none focus:ring-4 focus:ring-olive-300 disabled:opacity-60"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar mensaje'}
      </button>
    </form>
  )
}
