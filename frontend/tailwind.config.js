// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-150": "#EBEEF5",
        "gray-250": "#A0AEC0",
        "gray-350": "#EDF2F7",
        "gray-450": "#C4C4C4",
        "gray-550": "#2D3748",
        "gray-650": "#969696",
        "gray-750": "#606266",
        "gray-850": "#e2e8f0",
        "gray-950": "#909399",
        "black-150": "#161616",
      },
      boxShadow: {
        "8xl": "4px 4px 20px rgba(0,0,0,.1)"
      }
    },
  },
  plugins: [],
}

