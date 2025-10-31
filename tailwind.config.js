/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Blue
        secondary: "#1e293b", // Dark gray
        accent: "#fbbf24", // Amber
      },
    },
  },
  plugins: [],
};
