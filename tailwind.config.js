/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  themes: [
    {
      mytheme: {
        primary: "#ffffff",
        secondary: "#f6d860",
        accent: "#37cdbe",
        neutral: "#3d4451",
        
      },
    },
    
  ],
  plugins: [require("daisyui")],
}
