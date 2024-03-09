/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
          'righteous': ['Righteous', 'sans-serif'],
      },
      colors: {
        'custom-red': '#660000',
        'hover-red': '#993333',
        // ... other custom colors
      },
      borderRadius: {
        'extra-large': '96px',
      },
    },
  },
  plugins: [],
}
