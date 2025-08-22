
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        bge: "#0f0f10",
        gold1: "#d4af37",
        gold2: "#ffcc66",
        gold3: "#b58b22",
      },
      boxShadow: {
        gold: "0 0 40px rgba(212,175,55,0.08)"
      }
    },
  },
  plugins: [],
};
