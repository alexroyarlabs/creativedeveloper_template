/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#020617',
        surface: '#0b132b',
        surfaceAlt: '#111827',
        primary: '#06B6D4',
        accent: '#22C55E',
        soft: '#E5E7EB',
        softAlt: '#F9FAFB',
      },
      boxShadow: {
        soft: '0 10px 35px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
