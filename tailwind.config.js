/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backdropBlur: {
        '4xl': '100px',
      }
    },
  },
  plugins: [],
}

