/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  themes: [
    {
      mytheme: {
      
"primary": "#21b507",
      
"secondary": "#8ff791",
      
"accent": "#703ed6",
      
"neutral": "#221F2E",
      
"base-100": "#4A3168",
      
"info": "#3FBFDE",
      
"success": "#4AE3C9",
      
"warning": "#8A650F",
      
"error": "#EB333C",
      },
    },
  ],
  plugins: [require("daisyui")],
}
