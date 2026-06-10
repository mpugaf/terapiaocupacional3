import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── Variante A "Consultorio cálido" ──────────────────────────────
        cream:   '#FAF7F2',   // fondo principal — papel marfil
        surface: '#F0EBE1',   // superficie de cards — lino

        // Paleta primaria: tonos madera centrada en primary #7A5C44
        olive: {
          50:  '#F7F4F1',
          100: '#EDE6DF',
          200: '#D9CFC4',   // separador de secciones
          300: '#C4B09A',
          400: '#A88870',
          500: '#7A5C44',   // PRIMARY — madera oscura
          600: '#6A4D38',   // hover primary
          700: '#5A3F2C',
          800: '#4A3022',
          900: '#3A2218',
        },

        // Paleta acento: terracota centrada en accent #C97D4E
        clay: {
          50:  '#FDF7F2',
          100: '#F5E8DA',
          200: '#EACFB8',
          300: '#DDB090',
          400: '#D09470',
          500: '#C97D4E',   // ACCENT — terracota suave
          600: '#B86C3E',
          700: '#A05832',
          800: '#884828',
          900: '#703B20',
        },

        // Texto cálido
        ink: {
          DEFAULT: '#2C2420',   // casi negro cálido
          soft:    '#5A4A40',   // un tono más suave
          muted:   '#9C8878',   // texto secundario
        },
      },

      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        serif:   ['var(--font-source-serif)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        base: ['1.0625rem', { lineHeight: '1.75' }],
        lg:   ['1.125rem',  { lineHeight: '1.75' }],
        xl:   ['1.25rem',   { lineHeight: '1.6'  }],
        '2xl':['1.5rem',    { lineHeight: '1.4'  }],
        '3xl':['1.875rem',  { lineHeight: '1.3'  }],
        '4xl':['2.25rem',   { lineHeight: '1.2'  }],
        '5xl':['3rem',      { lineHeight: '1.1'  }],
        '6xl':['3.75rem',   { lineHeight: '1.05' }],
        '7xl':['4.5rem',    { lineHeight: '1.0'  }],
      },

      maxWidth: {
        content: '72rem',
        prose:   '68ch',
      },

      spacing: {
        section: '7rem',
      },

      borderRadius: {
        DEFAULT: '0.25rem',   // casi cuadrado — tratamiento editorial
      },

      boxShadow: {
        warm: '0 2px 8px rgba(122,92,68,0.12)',   // sombra cálida sutil
      },

      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

export default config
