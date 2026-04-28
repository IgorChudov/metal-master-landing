import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        steel: {
          50: '#f4f6f7',
          100: '#e2e8ea',
          200: '#c9d2d7',
          300: '#a3b3bb',
          400: '#758c98',
          500: '#5a717d',
          600: '#4d5f6a',
          700: '#435059',
          800: '#3c454d',
          900: '#353c43',
          950: '#1f2429',
        },
      },
    },
  },
  plugins: [],
};
export default config;