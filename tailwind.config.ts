import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontSize: {
        h1: "2rem", // Example size
        small: "sm",
      },
      fontWeight: {
        h1: "700", // Example weight
        light: "400",
      },
      colors: {
        dark: "#151c2c",
        white: "#FFFFFF",
        err: "red",
        gray: "#b7bac1",
        formBg: "#182237",
        formBtnBg: "#008080",
        blue: "#182237",
        navy: "#2e374a",
      },
      padding: {
        "5": "5px",
        "7": "7px",
        "8": "8px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "25": "25px",
        "50": "50px",
        "100": "100px",
        "70": "70px",
      },
      margin: {
        "5": "5px",
        "7": "7px",
        "8": "8px",
        "10": "10px",
        "15": "15px",
        "20": "20px",
        "50": "50px",
        "100": "100px",
        "70": "70px",
      },
      gap: {
        "10": "10px",
      },
      width: { "20": "20px", "250": "250px", "350": "350px", "500": "500px" },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
