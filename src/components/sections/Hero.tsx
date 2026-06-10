import { siteContent } from '@/content/site'

// Envuelve la palabra clave en un <span> con el subrayado SVG animado.
// Si la palabra no está en el headline, renderiza el texto sin modificar.
function HeadlineWithUnderline({ text }: { text: string }) {
  const keyword = 'autonomía'
  const idx = text.toLowerCase().indexOf(keyword)

  if (idx === -1) {
    return <>{text}</>
  }

  return (
    <>
      {text.slice(0, idx)}
      <span className="relative inline-block whitespace-nowrap">
        {text.slice(idx, idx + keyword.length)}
        {/*
          SVG underline animado con stroke-dashoffset.
          preserveAspectRatio="none" permite que se estire al ancho del texto.
          La animación se define en globals.css (.underline-accent path).
        */}
        <svg
          role="presentation"
          aria-hidden="true"
          className="underline-accent pointer-events-none absolute -bottom-1 left-0 w-full overflow-visible"
          height="12"
          viewBox="0 0 200 12"
          preserveAspectRatio="none"
        >
          <path
            d="M2,9 C40,3 80,11 120,6 C152,2 175,9 198,5"
            stroke="#C97D4E"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {text.slice(idx + keyword.length)}
    </>
  )
}

export function Hero() {
  const { headline, subheadline, cta } = siteContent.hero

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-cream pt-20"
    >
      {/*
        Mancha orgánica decorativa — acento secundario (arcilla) muy tenue.
        Simula una pincelada/acuarela de fondo. opacity muy bajo para no distraer.
        El border-radius asimétrico genera la forma orgánica sin SVG.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[15%] top-1/2 h-[620px] w-[620px] -translate-y-1/2 bg-clay-300"
        style={{
          borderRadius: '67% 33% 47% 53% / 40% 20% 80% 60%',
          filter: 'blur(72px)',
          opacity: 0.13,
        }}
      />

      {/* Segunda mancha más pequeña — lado izquierdo, muy sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[8%] bottom-[10%] h-[300px] w-[300px] bg-olive-200"
        style={{
          borderRadius: '40% 60% 70% 30% / 50% 40% 60% 50%',
          filter: 'blur(60px)',
          opacity: 0.18,
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-content px-6 py-20 sm:px-8 lg:px-8">
        {/* Eyebrow */}
        <p className="mb-8 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-olive-500">
          Terapia Ocupacional · Parkinson
        </p>

        {/* Headline — tipografía de impacto, serif */}
        <h1 className="mb-8 max-w-[14ch] font-display text-5xl font-bold text-ink sm:text-6xl lg:text-7xl">
          <HeadlineWithUnderline text={headline} />
        </h1>

        {/* Subheadline — sans, generoso, legible */}
        <p className="mb-12 max-w-prose text-lg leading-relaxed text-ink-soft">
          {subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-5">
          <a
            href={cta.primary.href}
            className="inline-flex items-center rounded bg-olive-500 px-8 py-4 font-sans text-base font-semibold text-cream transition-colors duration-200 ease-smooth hover:bg-clay-500 focus:outline-none focus:ring-4 focus:ring-olive-300"
          >
            {cta.primary.label}
          </a>

          {cta.secondary && (
            <a
              href={cta.secondary.href}
              className="inline-flex items-center gap-2 font-sans text-base font-medium text-ink-soft underline-offset-4 transition-colors duration-200 hover:text-ink focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
            >
              {cta.secondary.label}
              <span aria-hidden="true" className="text-clay-500">→</span>
            </a>
          )}
        </div>

        {/* Detalle decorativo inferior — línea fina en arcilla */}
        <div
          aria-hidden="true"
          className="mt-20 h-px w-24 bg-clay-300 lg:mt-28"
        />
      </div>
    </section>
  )
}
