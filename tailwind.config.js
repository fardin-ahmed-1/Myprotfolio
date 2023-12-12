/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primery: '#FD346E',
        secondary: '#6001D3',
        darkbg: '#121F28',
        textcolor: '#999999',
      }
    },
  },
  plugins: [],
}
