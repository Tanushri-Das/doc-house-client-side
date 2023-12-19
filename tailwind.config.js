/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff', // Light mode background color
          text: '#333333', // Light mode text color
        },
        dark: {
          background: '#151e3d', // Dark mode background color
          text: '#ffffff', // Dark mode text color
        },
      },
    },
  },
  plugins: [],
}