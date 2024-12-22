/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,mjs}","index.html"],
  theme: {
    extend: {
      colors: {
        accent: "#FFCC53",
        primary: "#A8D5BA",
        secondary: "#333333",
        contrast: "#CFCFCF",
        success: "#54974F",
        warning: "#CC3F3F"
      },
      spacing: {
        "250" : "15.625rem",
        
      }
    },
  },
  plugins: [],
}