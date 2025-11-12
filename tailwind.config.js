/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      colors: {
        SafCom: {
          50: '#f9fbff',
          100: '#e6f3ff',
          200: '#dff3ff',
          400: '#bfe6ff',
          500: '#0077ff',
          600: '#005fcc',
          700: '#023e8a',
          800: '#02112b',
          900: '#000814'
        },
        accent: {
          DEFAULT: '#60a5fa',
          cyan: '#0ea5e9'
        }
      },
      boxShadow: {
        'soft-light': '0 8px 24px rgba(11,18,32,0.06)',
        'soft-dark': '0 8px 36px rgba(2,17,43,0.6)'
      }
    }
  },
  plugins: [],
}