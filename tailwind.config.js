/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        gold: {
          50: '#fffdf0',
          100: '#fff9db',
          200: '#FFE8A3',
          300: '#fde047',
          400: '#FACC15',
          500: '#FFD700',
          600: '#eab308',
          700: '#ca8a04',
          800: '#a16207',
          900: '#854d0e',
        },
        navy: {
          50: '#f0f4ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#648bff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#0b132b',
          900: '#070A12',
          950: '#020617',
        },
        surface: {
          DEFAULT: '#0b132b',
          light: '#0D1320',
          card: 'rgba(255,255,255,0.05)',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'title': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'subtitle': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 8px -2px rgba(0,0,0,0.15), 0 4px 16px -4px rgba(0,0,0,0.2)',
        'medium': '0 4px 12px -2px rgba(0,0,0,0.2), 0 8px 24px -4px rgba(0,0,0,0.25)',
        'elevated': '0 8px 28px rgba(0,0,0,0.35)',
        'glass': '0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)',
        'gold-glow': '0 0 15px rgba(255,215,0,0.2), 0 0 40px rgba(255,215,0,0.1)',
        'blue-glow': '0 0 20px rgba(59,130,246,0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 8s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(4px) rotate(-1deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-1%, -1%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
