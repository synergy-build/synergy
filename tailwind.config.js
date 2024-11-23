/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'purple' : '#b746e2',
        'darkpurple' : '#8530a5',
        'blue' : '#2e4fa6',
        'darkblue' : '#1A316A',
        'lightgray' : '#f1f1f1',
      },
    },
  },
  plugins: [],
}

