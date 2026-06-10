'use client'

import { useEffect, useState } from 'react'
import { siteContent } from '@/content/site'

export function Navbar() {
  const { nav, metadata } = siteContent
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 shadow-warm backdrop-blur-sm'
          : 'bg-cream/80 backdrop-blur-sm'
      }`}
    >
      <nav
        className="mx-auto flex max-w-content items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* Logo / nombre del negocio */}
        <a
          href="#inicio"
          onClick={closeMenu}
          className="font-display text-lg font-bold text-olive-600 hover:text-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
        >
          {metadata.businessName}
        </a>

        {/* Links — desktop */}
        <ul className="hidden items-center gap-8 md:flex" role="list">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="font-sans text-sm font-medium text-ink-muted transition hover:text-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:ring-offset-2"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <a
          href="#contacto"
          className="hidden rounded bg-olive-500 px-5 py-2.5 font-sans text-sm font-semibold text-cream transition hover:bg-clay-500 focus:outline-none focus:ring-4 focus:ring-olive-300 md:inline-flex"
        >
          Pedir turno
        </a>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="rounded p-2 text-ink-muted hover:bg-surface focus:outline-none focus:ring-2 focus:ring-olive-500 md:hidden"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Menú mobile */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-olive-200 bg-cream md:hidden"
        >
          <ul className="space-y-1 px-4 py-3" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded px-3 py-2.5 font-sans text-base font-medium text-ink-soft hover:bg-surface hover:text-olive-500 focus:outline-none focus:ring-2 focus:ring-olive-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="border-t border-olive-200 px-4 py-4">
            <a
              href="#contacto"
              onClick={closeMenu}
              className="block rounded bg-olive-500 px-4 py-3 text-center font-sans font-semibold text-cream hover:bg-clay-500 focus:outline-none focus:ring-4 focus:ring-olive-300"
            >
              Pedir turno
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
