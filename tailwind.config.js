/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
content: ['./index.html', './src/**/*.{js,jsx}'],
theme: {
extend: {
colors: {
fluorescent: '#00FFFF',
dark: '#0B0C10',
},
},
},
plugins: [],
};