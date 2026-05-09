/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grid: {
          bg:           '#000408',
          surface:      '#010d18',
          border:       '#0d2a3a',
          cyan:         '#00e5ff',
          'cyan-dim':   '#00bcd4',
          orange:       '#ff6d00',
          'orange-dim': '#e65100',
          white:        '#e0f7fa',
          muted:        '#4dd0e1',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body:    ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        cyan:   '0 0 12px #00e5ff88, 0 0 30px #00e5ff33',
        orange: '0 0 12px #ff6d0088, 0 0 30px #ff6d0033',
        card:   'inset 0 0 0 1px #00bcd433',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(0,229,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.07) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid-sm': '40px 40px',
        'grid-lg': '80px 80px',
      },
      animation: {
        'scan':       'scan 4s linear infinite',
        'flicker':    'flicker 6s ease-in-out infinite',
        'pulse-cyan': 'pulseCyan 2s ease-in-out infinite',
        'slide-in':   'slideIn 0.6s ease forwards',
        'draw-line':  'drawLine 1.2s ease forwards',
      },
      keyframes: {
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        flicker: {
          '0%, 95%, 100%': { opacity: '1' },
          '96%':           { opacity: '0.4' },
          '97%':           { opacity: '1' },
          '98%':           { opacity: '0.6' },
        },
        pulseCyan: {
          '0%, 100%': { boxShadow: '0 0 8px #00e5ff66' },
          '50%':      { boxShadow: '0 0 24px #00e5ffcc' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          from: { strokeDashoffset: '1000' },
          to:   { strokeDashoffset: '0' },
        },
      },
    },
  },
  plugins: [],
}
