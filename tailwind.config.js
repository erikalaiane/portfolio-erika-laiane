/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#111827',   // era #0B0B0F
          secondary: '#161b27',
          tertiary: '#1c2333',
        },
        purple: {
          deep:    '#3b1fa8',
          default: '#6D28D9',
          main:    '#8B5CF6',
          light:   '#A78BFA',
        },
        pink: {
          deep:    '#9d1a5c',
          default: '#DB2777',
          main:    '#EC4899',
          light:   '#F472B6',
        },
        neutral: {
          800: '#27272a',
          700: '#3f3f46',
          500: '#71717a',
          400: '#a1a1aa',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        logo: ['Abril Fatface', 'serif'],
      },
    },
  },
  plugins: [],
}