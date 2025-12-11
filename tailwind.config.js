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
        'cream': '#F5F5F0',       // Slightly cleaner white/stone
        'cream-dark': '#E0E0DB',
        'ink': '#0A0A0A',         // Jet Black

        // Accents - "International Style" (Professional, High Contrast)
        'eng-blue': '#002147',    // Deep Navy (Professional, Architecture)
        'eng-blue-light': '#003366',

        'safety-orange': '#FF5722', // Deep Industrial Orange (High vis but not neon)
        'safety-orange-light': '#FF7043',

        'accent-yellow': '#FFC107', // Warning Amber (Standard signal color)
        'accent-yellow-light': '#FFD54F',

        'digital-cyan': '#607D8B',  // Slate Blue Grey (Structural steel, no longer cyan)
        'term-green': '#43A047',    // Safety Green (Standard signal green)
        'alert-red': '#D32F2F',     // Engineering Red (Standard signal red)
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
      }
    }
  },
  plugins: [],
}
