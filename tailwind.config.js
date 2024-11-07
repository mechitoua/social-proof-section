/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#4A154B',
          light: '#F7F1F7',
        },
      },
      fontFamily: {
        spartan: ['"League Spartan"', 'sans-serif'],
      },
      backgroundImage: {
        hero: "url('/bg-pattern-top-desktop.svg')",
      },
    },
  },
  plugins: [],
};
