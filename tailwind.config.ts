import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Primary brand colors
        brand: {
          orange: {
            50: '#FFF7ED',
            100: '#FFEDD5',
            200: '#FED7AA',
            300: '#FDBA74',
            400: '#FB923C',
            500: '#F97316', // Primary orange
            600: '#EA580C',
            700: '#C2410C',
            800: '#9A3412',
            900: '#7C2D12',
            950: '#431407',
          },
          black: {
            50: '#F6F6F6',
            100: '#E7E7E7',
            200: '#D1D1D1',
            300: '#B0B0B0',
            400: '#888888',
            500: '#6D6D6D',
            600: '#5D5D5D',
            700: '#4F4F4F',
            800: '#454545',
            900: '#3D3D3D',
            950: '#0A0A0A', // Deep black
          },
        },
        // Legacy colors for compatibility
        dark: {
          1: '#0A0A0A', // Updated to deep black
          2: '#1A1A1A',
          3: '#2D2D2D',
          4: '#404040',
        },
        orange: {
          1: '#F97316', // Primary orange
          2: '#FB923C',
          3: '#FDBA74',
        },
        accent: {
          orange: '#F97316',
          'orange-light': '#FB923C',
          'orange-dark': '#EA580C',
          gray: '#6D6D6D',
          'gray-light': '#B0B0B0',
          'gray-dark': '#3D3D3D',
        },
        // Keep some original colors for backward compatibility
        blue: {
          1: '#0E78F9',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero-background.png')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
