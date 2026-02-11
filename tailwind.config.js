/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F1F1F",
        secondary: "#0A1A2F",
        accent: "#3B82F6", // Bright blue for highlights
        text: "rgb(209, 213, 219)", // Gray 300
        heading: "rgb(243, 244, 246)", // Gray 100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        signature: ['Great Vibes'],
      },
      animation: {
        'slow-spin': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
