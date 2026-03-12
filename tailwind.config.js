/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heebo: ['Heebo', 'sans-serif'],
      },
      colors: {
        sand:      '#F9F8F6',
        midnight:  '#0F172A',
        ink:       '#475569',
        gold:      '#EAB308',
        highlight: '#FEF3C7',
        cream:     '#FFF8F0',
        tgBlue:    '#24A1DE',
        hawkGold:  '#F59E0B',
      },
      boxShadow: {
        card:      '0 4px 20px rgba(15,23,42,0.07)',
        'card-lg': '0 10px 30px rgba(15,23,42,0.08)',
        cta:       '0 12px 30px rgba(15,23,42,0.25)',
        'cta-lg':  '0 16px 40px rgba(15,23,42,0.32)',
      },
    },
  },
  plugins: [],
}
