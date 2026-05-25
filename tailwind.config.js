/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#030712',
          900: '#0a0f1a',
          850: '#0d1424',
          800: '#111827',
          750: '#151d2e',
          700: '#1a2332',
        },
        accent: {
          cyan: '#22d3ee',
          blue: '#3b82f6',
          purple: '#a78bfa',
          pink: '#f472b6',
          emerald: '#34d399',
          amber: '#fbbf24',
          rose: '#fb7185',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(34, 211, 238, 0.25)',
        'glow-purple': '0 0 40px -10px rgba(167, 139, 250, 0.3)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
