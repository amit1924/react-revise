/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        rocket: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100px)" },
        },
        smoke: {
          "0%": { transform: "scale(1)", opacity: 0.5 },
          "100%": { transform: "scale(1.5)", opacity: 0 },
        },
      },
      animation: {
        rocket: "rocket 1s infinite",
        smoke: "smoke 2s infinite",
      },
    },
  },

  plugins: [],
};
