/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary':'#4CAFAF',
        'neutralGrey':'#717171',
        'gray900':'#18191F',
        'other':'#FFA94D',
        'secondary':'#3CD303',
        'tertiary':'#F0F0F0',
        'silver':'#E7E4E4',
        'greenPrimary': '#2ECC71',
      }
    },
  },
  plugins: [],
}

