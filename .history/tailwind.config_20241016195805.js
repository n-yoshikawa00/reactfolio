/** @type {import('tailwindcss').Config} */
export default {
  content: ["/index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        //基本色
        body: "#ebe7e0",
        //選択時の色
        selectedText: "#A9A9A9",
        secondary: "#9191A4",
        badge: "#FFCC66",
        inputBorder: "#565666",
        input: "#2A2A2A",
      },
    },
    fontFamily: {
      NotoSerifJP: ["Noto Serif JP", "serif"],
    },
  },
  plugins: [],
};
