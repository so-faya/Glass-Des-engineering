/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Custom gold color
        'custom-e7d7d7': '#e7d7d7', // Custom border color
        'card-color': '#f5f0f0',
      },
      borderColor: {
        'custom-e7d7d7': '#e7d7d7', // Custom border color
      },
    },
  },
  plugins: [],
}

