/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'cream': '#F2F2F0',       // Concrete White - Cleaner, more modern
        'cream-dark': '#E6E6E3',
        'ink': '#0A0A0A',         // Jet Black

        // Accents - "Modern Architectural"
        'eng-blue': '#0047AB',    // Cobalt Blue - Vibrant & Professional
        'eng-blue-light': '#0055CC',

        'safety-orange': '#FF4D00', // International Orange - Electric/Vibrant
        'safety-orange-light': '#FF6A00',

        'accent-yellow': '#FFD600', // Bright Yellow - High visibility, sharp
        'accent-yellow-light': '#FFE54F',

        'digital-cyan': '#607D8B',  // Slate Blue Grey
        'term-green': '#00C853',    // Vibrant Signal Green
        'alert-red': '#D50000',     // Vivid Red
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
