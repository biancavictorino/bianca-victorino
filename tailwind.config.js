/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': "#EF5DA8",
        'text-color': "#0F172A",
        'background-color': "#FFFFFF",
      }
    },
  },
  plugins: [],
}

