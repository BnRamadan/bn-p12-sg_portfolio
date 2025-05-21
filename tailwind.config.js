/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      colors: {
        'cyber-blue': {
          '50': '#f0f7ff',
          '100': '#e0f0fe',
          '200': '#bae2fd',
          '300': '#7ccffb',
          '400': '#35b9f6',
          '500': '#0ca1e9',
          '600': '#0082c9',
          '700': '#0168a3',
          '800': '#065886',
          '900': '#0b2545',
          '950': '#07172a',
        },
        'cyber-amber': {
          '50': '#fdf8ee',
          '100': '#f9eece',
          '200': '#f5de99',
          '300': '#eeb868',
          '400': '#eb9936',
          '500': '#e17b17',
          '600': '#c45c11',
          '700': '#a34011',
          '800': '#863316',
          '900': '#702b16',
          '950': '#3e140b',
        },
      },
    },
  },
  plugins: [],
};