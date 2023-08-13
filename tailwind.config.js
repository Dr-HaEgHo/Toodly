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
        borderlineTrans: "#ebebeb40",
        inputBorder: "#dadada",
        appYellow: "#FFD43B",
        appBlack: "#212529",
        darkGray: "#444",
        sidebarBgGray: "#f4f4f4",
        iconGray: "#7c7c7c",
        iconGrayLight: "#7c7c7c40",
        tagRed: "#FF6B6B",
        tagRedTrans: "#FF6B6B40",
        tagblue: "#66D9E8",
        tagblueTrans: "#66D9E840",
        tagYellow: "#FFD43B",
        tagYellowTrans: "#FFD43B40",
      },
    },
  },
  plugins: [],
};
