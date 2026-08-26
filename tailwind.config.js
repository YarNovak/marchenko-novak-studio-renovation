/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0a',
          800: '#141414',
          700: '#1a1a1a',
          600: '#242424',
          500: '#333333',
          400: '#4a4a4a',
          300: '#6b6b6b',
          200: '#9a9a9a',
          100: '#c4c4c4',
        },
        paper: {
          50: '#ffffff',
          100: '#fafaf9',
          200: '#f5f5f4',
          300: '#ededec',
          400: '#e2e2e0',
          500: '#d6d6d4',
        },
        accent: {
          DEFAULT: '#8a7a5f',
          light: '#a89878',
          dark: '#6b5d44',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.35em',
        'wide-sm': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'fade-down': 'fadeDown 1s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1.0)' },
          '100%': { transform: 'scale(1.12)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
