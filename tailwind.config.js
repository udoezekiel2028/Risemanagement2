/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0b1c3d',
        },
        mist: {
          DEFAULT: '#6c757d',
        },
        cloud: {
          DEFAULT: '#f8f9fa',
        },
        paper: {
          DEFAULT: '#ffffff',
        },
        gold: {
          DEFAULT: '#f9b934',
          deep: '#e2a21f',
          tint: '#fef4de',
        },
        destructive: {
          DEFAULT: '#b91c1c',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Open Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

