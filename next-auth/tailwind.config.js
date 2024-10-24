// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "#40f740",
      },
      boxShadow: {
        around: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      },
      screens: {
        sm: "540px",
        // => @media (min-width: 540px) { ... }
        md: "720px",
        // => @media (min-width: 720px) { ... }
        lg: "960px",
        // => @media (min-width: 960px) { ... }
        xl: "1140px",
        // => @media (min-width: 1140px) { ... }
        "2xl": "1280px",
        // => @media (min-width: 1320px) { ... }
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
