/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        spin: "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
