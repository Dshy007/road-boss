import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#1A2B4A",
        "jet-black": "#0D0D0D",
        "chrome-silver": "#C0C0C0",
        "deep-gold": "#C9A84C",
        "dark-maroon": "#6B1F2A",
        "warm-brown": "#4A2C1A",
        "bg-primary": "#0D0D0D",
        "bg-secondary": "#141414",
        "bg-card": "#1A1A1A",
        "bg-card-hover": "#222222",
        success: "#2D8A4E",
        warning: "#D4A843",
        danger: "#8B2B2B",
        info: "#2A5A8A",
      },
      fontFamily: {
        heading: ["Barlow Condensed", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
