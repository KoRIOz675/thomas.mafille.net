/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        150: '37.5rem',
        100: '25rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
