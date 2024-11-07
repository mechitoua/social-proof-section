/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-magenta': '#502050',
        'soft-pink': '#ee68a4',
        'grayish-magenta': '#937b92',
        'grayish-magenta-lighter': '#f7f2f7',
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
