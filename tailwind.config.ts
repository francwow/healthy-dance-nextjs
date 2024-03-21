import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        inter: ["var(--font-inter)"],
        urbanist: ["var(--font-urbanist)"],
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        light: {
          900: "#f8f8f5",
        },
        dark: {
          900: "#1c1c1b",
        },
        normalwhite: {
          900: "#ffffff",
        },
        normalblack: {
          900: "#000000",
        },
        junglegreen: {
          900: "#2c4034",
        },
        espresso: {
          900: "#5a4027",
        },
        bluestone: {
          900: "#4c617c",
        },
        darkblue: {
          900: "#0f172a",
        },
        pinkberry: {
          900: "#ae5781",
        },
        pinklogo: {
          900: "#f47f81",
        },
      },
    },
    screens: {
      lg: "991px",
    },
  },
  plugins: [],
};
export default config;
