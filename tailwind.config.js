/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'custom-blue': '0 4px 8px rgba(59, 130, 246, 0.5)',
        'custom-yellow': '0 4px 6px -1px rgba(255, 255, 0, 0.1), 0 2px 4px -1px rgba(255, 255, 0, 0.06)',
      },
    },
  },
  plugins: [],
}

