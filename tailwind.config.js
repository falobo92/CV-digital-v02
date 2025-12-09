/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx"
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#FFFDF5',
        'cream-dark': '#F5F0E6',
        'ink': '#0D0D0D',
        'ink-light': '#1A1A1A',
        'eng-blue': '#1E3A5F',
        'eng-blue-light': '#2A4A73',
        'safety-orange': '#FF4D00',
        'safety-orange-light': '#FF6B2C',
        'accent-yellow': '#FFD500',
        'accent-yellow-light': '#FFE14D',
        'digital-cyan': '#00B4D8',
        'term-green': '#00FF66',
        'alert-red': '#FF2D2D',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
        display: ['"Archivo Black"', 'Impact', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px #0D0D0D',
        'brutal-sm': '4px 4px 0px 0px #0D0D0D',
        'brutal-lg': '8px 8px 0px 0px #0D0D0D',
        'brutal-xl': '12px 12px 0px 0px #0D0D0D',
        'brutal-pressed': '2px 2px 0px 0px #0D0D0D',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      }
    }
  },
  plugins: [],
}
