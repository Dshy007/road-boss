/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        gold: "#FFD700",
        danger: "#EF4444",
        success: "#22C55E",
        truckBlue: "#1E3A8A",
      },
    },
  },
  plugins: [],
};
