/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#020617',
        primary: '#06B6D4',
        accent: '#22C55E',
        'light-text': '#E5E7EB',
        'light-bg': '#F9FAFB',
      },
    },
  },
  plugins: [],
}
