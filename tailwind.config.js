/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pokemon': "url('../public/images/pokemon-hero.jpg')",
      },
      minHeight: {
        'screen-bg-image': 'calc(100vh - 164px)',
      },
      fontSize: {
        '3x2': '32px'
      }

    },
  },
  plugins: [],
}