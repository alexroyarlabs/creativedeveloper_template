/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Manrope"', 'system-ui', 'sans-serif'],
        display: ['"Manrope"', 'system-ui', 'sans-serif']
      },
      colors: {
        cream: '#F7F1E7',
        mint: '#B8E2C8',
        deepMint: '#7EC89A',
        coral: '#F47B6C',
        sand: '#E6D8C3',
        ink: '#12221D',
        mellowYellow: '#F5D565'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(18, 34, 29, 0.12)'
      },
      backgroundImage: {
        'mesh-soft':
          'radial-gradient(1200px at 10% 10%, rgba(244, 123, 108, 0.25), transparent 35%), radial-gradient(900px at 90% 20%, rgba(126, 200, 154, 0.35), transparent 40%), radial-gradient(900px at 50% 90%, rgba(245, 213, 101, 0.25), transparent 40%)'
      }
    }
  },
  plugins: []
};
