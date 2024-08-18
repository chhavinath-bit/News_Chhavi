import img from "./src/home_background_2.jpg";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        nav_h: "7vh",
        side_block: "10vh",
        left_height: "93vh",
        "11/12": "91.666667%",
        "1/12": "8.333333%",
         "1/20":"5%",
      },
     
    },
  },
  plugins: [],
};
