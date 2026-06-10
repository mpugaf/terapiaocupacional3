import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

export function Parkinson() {
  const { heading, intro, benefits, closing } = siteContent.parkinson

  return (
    <SectionWrapper id="parkinson" className="bg-surface">
      <div className="mb-10 text-center">
        <h2 className="mb-4 font-display text-3xl font-bold text-ink sm:text-4xl">{heading}</h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-ink-soft">{intro}</p>
      </div>

      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="rounded bg-cream p-6 shadow-warm">
            <h3 className="mb-2 font-display text-xl font-semibold text-olive-600">{benefit.title}</h3>
            <p className="leading-relaxed text-ink-muted">{benefit.description}</p>
          </article>
        ))}
      </div>

      <p className="text-center text-lg text-ink-soft">
        {closing}{' '}
        <a
          href="#contacto"
          className="font-semibold text-olive-500 underline underline-offset-2 hover:text-olive-600 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
        >
          Escríbeme sin compromiso
        </a>
      </p>
    </SectionWrapper>
  )
}
