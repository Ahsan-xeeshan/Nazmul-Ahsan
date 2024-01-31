/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // maxWidth: {
      //   containerXXl: "1320px",
      //   containerXl: "1140px",
      // },
      fontFamily: {
        pops: ["Poppins", "sans-serif"],
        robo: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        mainBanner: "url('./src/assets/bannerPrint.jpg')",
        secondBanner: "url('./src/assets/bannerBg.jpg')",
      },
      animation: {
        textAnime: "bounce 5s linear infinite",
      },
    },
  },
  plugins: [],
};
