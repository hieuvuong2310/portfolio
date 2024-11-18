import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

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
    function ({ addUtilities }: PluginAPI) {
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
    },
  ],
} satisfies Config;
