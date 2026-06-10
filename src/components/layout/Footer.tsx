import { siteContent } from '@/content/site'

export function Footer() {
  const { metadata } = siteContent

  return (
    <footer className="bg-ink py-12 text-olive-200">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Nombre y descripción breve */}
          <div>
            <p className="mb-2 font-display text-lg font-bold text-cream">{metadata.businessName}</p>
            <p className="text-sm leading-relaxed">{metadata.description}</p>
          </div>

          {/* Datos de contacto rápido */}
          <div>
            <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
              Contacto
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`tel:${metadata.phone.replace(/\s/g, '')}`}
                  className="transition hover:text-cream focus:outline-none focus:ring-2 focus:ring-olive-400"
                >
                  {metadata.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${metadata.email}`}
                  className="transition hover:text-cream focus:outline-none focus:ring-2 focus:ring-olive-400"
                >
                  {metadata.email}
                </a>
              </li>
              <li>
                {metadata.address.street}, {metadata.address.city}
              </li>
            </ul>
          </div>

          {/* Redes sociales (solo muestra los que estén configurados) */}
          {(metadata.socialLinks.instagram || metadata.socialLinks.linkedin) && (
            <div>
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-wider text-ink-muted">
                Redes
              </p>
              <ul className="space-y-2 text-sm">
                {metadata.socialLinks.instagram && (
                  <li>
                    <a
                      href={metadata.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-cream focus:outline-none focus:ring-2 focus:ring-olive-400"
                    >
                      Instagram
                    </a>
                  </li>
                )}
                {metadata.socialLinks.linkedin && (
                  <li>
                    <a
                      href={metadata.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-cream focus:outline-none focus:ring-2 focus:ring-olive-400"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center font-sans text-sm text-ink-muted">
          <p>
            © {new Date().getFullYear()} {metadata.businessName}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
