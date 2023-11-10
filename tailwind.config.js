/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layout': '80px 1fr',
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        'layout': '150px 1fr 150px',
      }
    },
  },
  plugins: [],
}

