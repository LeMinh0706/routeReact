/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'Phone': '382px',
      'laptop': '1862px',
    },
  },
  plugins: [],
}

