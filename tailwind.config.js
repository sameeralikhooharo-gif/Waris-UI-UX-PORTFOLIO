/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#050505',
        surface: '#0F1115',
        card: '#171A22',
        'card-2': '#1E2230',
        border: '#232833',
        'border-2': '#2E3342',
        primary: '#4F7CFF',
        secondary: '#00D5FF',
        accent: '#7B61FF',
        success: '#00E676',
        warning: '#FFB020',
        error: '#FF5470',
        'text-1': '#FFFFFF',
        'text-2': '#A7AFBE',
        'text-3': '#6B7280',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(79, 124, 255, 0.5)',
        'glow-cyan': '0 0 40px -10px rgba(0, 213, 255, 0.45)',
        'glow-purple': '0 0 40px -10px rgba(123, 97, 255, 0.5)',
        'glow-green': '0 0 30px -8px rgba(0, 230, 118, 0.45)',
        soft: '0 12px 40px -12px rgba(0,0,0,0.6)',
        'inset-line': 'inset 0 1px 0 0 rgba(255,255,255,0.04)',
      },
      keyframes: {
        'pulse-dot': {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(4%, -3%) scale(1.05)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.97)' },
        },
      },
      animation: {
        'pulse-dot': 'pulse-dot 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 18s linear infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        marquee: 'marquee 40s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
