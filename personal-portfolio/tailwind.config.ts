import type { Config } from "tailwindcss";

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
        accent: "#F9D838"
      },
      fontFamily: {
        primary: ['JandaManateeSolid', 'sans-serif'],
        accent: ['Jua', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
