/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        greenEmerald: "#6ef3ab",
      },
      dropShadow: {
        navItem: '0px 0px 4px #000000'
      },
    },
  },
  plugins: [],
};
