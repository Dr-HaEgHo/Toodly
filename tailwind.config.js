/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
      colors: {
        whiteBg: "#fafafa",
        borderline: "#ebebeb",
        inputBorder: "#dadada",
        appYellow: "#FFD43B",
        appBlack: "#212529",
        darkGray: "#444",
        sidebarBgGray: "#f4f4f4",
        iconGray: "#7c7c7c",
        iconGrayLight: "#7c7c7c40",
      },
    
    },
  },
    plugins: [],
}
