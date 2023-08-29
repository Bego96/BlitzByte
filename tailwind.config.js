/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'small-desktop': {'max': '1280px'},
      // => @media (max-width: 1280px) { ... }
      'laptop': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }
      'tablet': {'max': '768px'},
      // => @media (max-width: 640px) { ... }
      'phone': {'max': '639px'}
    },
    extend: {},
  },
  plugins: [],
}
