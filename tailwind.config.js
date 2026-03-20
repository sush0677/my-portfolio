/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: "#020202",
        foreground: "#ffffff",
        primary: {
          DEFAULT: "#06b6d4", // Cyan
          dark: "#0891b2",
        },
        secondary: {
          DEFAULT: "#8b5cf6", // Violet
          dark: "#7c3aed",
        },
        accent: "#f43f5e", // Rose
        zinc: {
          950: "#09090b",
          900: "#18181b",
          800: "#27272a",
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
}
