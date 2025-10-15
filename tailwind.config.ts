import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0D7BEA",
          dark: "#0B5DBC",
          light: "#E7F3FF"
        }
      },
      boxShadow: {
        card: "0 20px 60px -20px rgba(15, 23, 42, 0.25)"
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      }
    }
  },
  plugins: []
};

export default config;
