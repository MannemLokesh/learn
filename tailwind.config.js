/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    "from-blue-500",
    "to-blue-600",
    "from-emerald-500",
    "to-emerald-600",
    "from-cyan-500",
    "to-cyan-600",
    "bg-gradient-to-r"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
