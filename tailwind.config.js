/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors :{
        'main-primary-title' : 	'#FFFFFF',
        'main-characters' : '#F9F7F7',
        'main-card' : '#DBE2EF',
        'main-cardButton' : '#3F72AF',
        'main-cardTitle' : '#112D4E',
        'mintchoc-green-one':'#D5F8E8',
        'mintchoc-green-two':'#AAF0D1',
        'mintchoc-green-three':'#6effac',
        'mintchoc-brown-one':'#CD9865',
        'mintchoc-brown-two':'#84563C',
        'mintchoc-brown-three':'#4d2b25',
      },
      backgroundImage: {
        'hero-pattern': "url('/main-bg.png')",
      }
    },
  },
  plugins: [],
};
