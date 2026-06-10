import {
  KeyRound,
  Coffee,
  Pencil,
  BookOpen,
  Users,
  FileText,
  type LucideIcon,
} from 'lucide-react'
import { siteContent } from '@/content/site'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'

// Objetos cotidianos → actividades que el paciente trabaja para recuperar.
// El ícono representa la actividad, no el servicio en sí.
const ICON_MAP: Record<string, LucideIcon> = {
  key:       KeyRound,   // las llaves del hogar → evaluación domiciliaria
  coffee:    Coffee,     // la taza del desayuno → rutina diaria
  pencil:    Pencil,     // escribir → control motor fino
  book:      BookOpen,   // leer → estimulación cognitiva
  users:     Users,      // las personas que acompañan → cuidadores
  clipboard: FileText,   // la hoja del plan → plan personalizado
}

// Alternamos entre el acento primario y el secundario para cada fila
const ACCENT = [
  { bg: 'bg-olive-50',  icon: 'text-olive-500', number: 'text-olive-100' },
  { bg: 'bg-clay-50',   icon: 'text-clay-500',  number: 'text-clay-100'  },
] as const

export function Servicios() {
  const { heading, subheading, items } = siteContent.servicios

  return (
    <SectionWrapper id="servicios" className="bg-cream">
      {/* Encabezado de sección — alineado a izquierda, editorial */}
      <RevealOnScroll>
        <div className="mb-16 border-l-2 border-clay-300 pl-6">
          <h2 className="mb-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            {heading}
          </h2>
          <p className="max-w-xl text-lg text-ink-soft">{subheading}</p>
        </div>
      </RevealOnScroll>

      {/* Lista editorial — una fila por servicio, alternando dirección */}
      <div className="divide-y divide-clay-100">
        {items.map((item, i) => {
          const Icon = ICON_MAP[item.icon] ?? FileText
          const accent = ACCENT[i % 2]
          const isEven = i % 2 === 0

          return (
            <RevealOnScroll key={item.title} delay={i * 60}>
              <article
                className={`
                  group flex flex-col gap-10 py-12
                  sm:flex-row sm:items-center sm:gap-16
                  ${isEven ? '' : 'sm:flex-row-reverse'}
                `}
              >
                {/* Visual: número de orden + ícono superpuesto */}
                <div className="relative shrink-0 self-start sm:self-center">
                  {/* Número decorativo de fondo */}
                  <span
                    aria-hidden="true"
                    className={`
                      pointer-events-none absolute -left-3 -top-4
                      select-none font-display text-8xl font-bold leading-none
                      ${accent.number}
                    `}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Contenedor del ícono */}
                  <div
                    className={`
                      relative z-10 flex h-20 w-20 items-center justify-center
                      rounded ${accent.bg}
                      transition-transform duration-300 group-hover:scale-105
                    `}
                  >
                    <Icon
                      size={40}
                      strokeWidth={1.25}
                      className={accent.icon}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Texto */}
                <div className="flex-1">
                  <h3 className="mb-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="max-w-prose text-lg leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </article>
            </RevealOnScroll>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
