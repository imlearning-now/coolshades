/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        climateGreen: '#16a34a',
        climateBlue: '#2563eb',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          lg: '1024px',
          xl: '1200px',
          '2xl': '1360px',
        },
      },
    },
  },
  plugins: [],
}


