/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        primery: '#FD346E',
        secondary: '#6001D3',
        darkbg: '#121F28',
        textcolor: '#ffffffbf',
        bordertrs: '#d7d1FF35',
        backgroundtrs: '#6b728033',
        hoverbgtrs: '#1D3958',
      }
    },
  },
  plugins: [require("daisyui")],
}
