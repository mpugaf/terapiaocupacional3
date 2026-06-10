interface ImagePlaceholderProps {
  alt: string
  height?: string
  className?: string
  label?: string
}

/** Placeholder visual para fotos pendientes. Reemplazar por next/image cuando se tengan los assets. */
export function ImagePlaceholder({
  alt,
  height = 'h-64',
  className = '',
  label = 'Foto próximamente',
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`flex w-full items-center justify-center rounded bg-olive-100 ${height} ${className}`}
    >
      <div className="text-center text-ink-muted">
        <svg
          className="mx-auto mb-3 h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M13.5 3.75H6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 006 21.75h12a2.25 2.25 0 002.25-2.25V10.5M13.5 3.75l6.75 6.75M13.5 3.75V10.5h6.75"
          />
        </svg>
        <span className="font-sans text-sm font-medium">{label}</span>
      </div>
    </div>
  )
}
