/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      '6': 'repeat(6, minmax(0, 5fr))',
    },
    width: {
      '19': '150px',
      '400' : '550px',
      '250' : '250px',
      '350' : '350px'
    },
    margin: {
      '500': '500px',
      '100' : '100px',
      '20' : '20px'
    }
  },
  plugins: [],
}

