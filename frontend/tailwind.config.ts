import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark Theme Base
        'casino-dark': {
          DEFAULT: '#0A0A0F',
          100: '#1A1A24',
          200: '#2A2A38',
          300: '#3A3A4C',
        },
        // Gold Accent
        'casino-gold': {
          DEFAULT: '#FFD700',
          light: '#FFE55C',
          dark: '#B8960A',
        },
        // Neon Accents
        'casino-cyan': '#00F5FF',
        'casino-magenta': '#FF00FF',
        // Game Table Colors
        'table-green': {
          DEFAULT: '#0B5D1E',
          light: '#0E7F28',
          dark: '#084416',
        },
        // Chip Colors
        chip: {
          white: '#FFFFFF',
          red: '#DC2626',
          green: '#16A34A',
          black: '#171717',
          purple: '#9333EA',
          orange: '#F97316',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'card-flip': 'flip 0.6s ease-in-out',
        'chip-stack': 'stack 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(180deg)' },
        },
        stack: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #FFD700, 0 0 10px #FFD700' },
          '100%': { boxShadow: '0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'table-felt': 'linear-gradient(135deg, #0B5D1E 0%, #084416 100%)',
      },
    },
  },
  plugins: [],
}
export default config
