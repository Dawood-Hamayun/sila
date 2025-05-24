// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
      extend: {
        colors: {
          // We'll use CSS variables instead of extending colors
        },
        fontFamily: {
          // Using CSS instead of extending font families
        },
      },
    },
    plugins: [
      // Removing plugins for now to simplify the configuration
    ],
  }