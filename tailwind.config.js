/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "sailing-lady": "url('https://images.pexels.com/photos/5046517/pexels-photo-5046517.jpeg')",
        docks:
          "url('https://images.unsplash.com/photo-1561723236-753ad66c3561?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      colors: {
        bake: {
          "warm-beige": "#F5F0E1",
          "cinnamon-brown": "#A67B5B",
          "burnt-orange": "#FFFFFF",
          "dusty-rose": "#d3a59b",
          "espresso": "#4b3a2a",
          "espresso-dark": "#3C2F2F",
          "honey-gold": "#F2C057",
        },
        custom8008: {
          "bg-color": "#333a45",
          "main-color": "#f44c7f",
          "caret-color": "#f44c7f",
          "sub-color": "#939eae",
          "sub-alt-color": "#2e343d",
          "text-color": "#e9ecf0",
          "error-color": "#da3333",
          "error-extra-color": "#791717",
          "colorful-error-color": "#c5da33",
          "colorful-error-extra-color": "#849224",
        },
        modernDolchLight: {
          "bg-color": "#dbdbdb",
          "caret-color": "#8fd1c3",
          "main-color": "#8fd1c3",
          "sub-color": "#a3a2a2",
          "sub-alt-color": "#e8e8e8",
          "text-color": "#454545",
          "error-color": "#ea8a9a",
          "error-extra-color": "#e0556d",
          "colorful-error-color": "#ea8a9a",
          "colorful-error-extra-color": "#e0556d",
        },
        baguette: {
          crust: {
            tan: "#D2B48C",
            lightBrown: "#C19A6B",
            saddleBrown: "#8B4513",
            sienna: "#A0522D",
          },
          innerBread: {
            cornsilk: "#FFF8DC",
            linen: "#FAF0E6",
            wheat: "#F5DEB3",
            khaki: "#F0E68C",
          },
        },
      },
      fontFamily: {
        sans: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
