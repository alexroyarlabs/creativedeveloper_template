/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#020617',
        surface: '#0b1226',
        primary: '#06B6D4',
        accent: '#22C55E',
        muted: '#E5E7EB',
        soft: '#F9FAFB'
      },
      boxShadow: {
        glow: '0 20px 50px rgba(6, 182, 212, 0.1)',
        card: '0 16px 60px rgba(2, 6, 23, 0.35)'
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      backgroundImage: {
        'grid-tech':
          'radial-gradient(circle at 1px 1px, rgba(6, 182, 212, 0.15) 1px, transparent 0)',
        'hero-gradient':
          'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(34, 197, 94, 0.1))'
      }
    }
  },
  plugins: []
};
