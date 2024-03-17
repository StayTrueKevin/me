import type { Config } from "tailwindcss";

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-green': '#007a4c',
        'secondary-yellow': '#eab308',
        'accent-orange': '#f97316',
        'dark-background': '#171717',
        'light-text': '#d1d5db',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config;
