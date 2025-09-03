/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: { center: true },
    extend: {
      boxShadow: {
        'input': 'inset 0 0 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
