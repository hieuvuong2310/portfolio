import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2E51DE",
        accent: "#F9D838",
        job: "#FDF0D5"
      },
      fontFamily: {
        primary: ['JandaManateeSolid', 'sans-serif'],
        accent: ['Jua', 'sans-serif'],
      },
      textStrokeWidth: {
        'default': '1px',
        '2': '2px',
        '4': '4px',
      },
      textStrokeColor: {
        'black': '#000',
        'white': '#fff',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke-width': '1px',
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-3': {
          '-webkit-text-stroke-width': '3px',
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-4': {
          '-webkit-text-stroke-width': '4px',
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
      });
    }),
  ],
} satisfies Config;
