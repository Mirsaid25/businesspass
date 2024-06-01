import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
      colors: {
        primary: {
          'gradient': 'linear-gradient(90deg, #121212 0%, #282829 100%)',
        },
        secondary: '#474747',
      },
      fontFamily: {
        default: ["var(--font-suisseintl)"]
      },
      boxShadow: {
        'custom': '0px 0px 26.100000381469727px 0px rgba(0, 30, 33, 0.2)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config