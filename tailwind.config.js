/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'eyes': "url('/src/assets/Eyes.jpg')",
        'socio': "url('/src/assets/socio.jpg')",
        'nuox': "url('/src/assets/nuox.jpg')",
        'portfolio': "url('/src/assets/portfolio.jpg')",
        'fitness': "url('/src/assets/the fitness club.jpg')",
        'picture': "url('/src/assets/profilepicture.jpg')",
      },
    },
    letterSpacing: {
      tightester: '-.085em',
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    }
  },
  plugins: [],
}

