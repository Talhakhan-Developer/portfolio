/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "480px",
      // => @media (min-width: 480px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      backgroundImage: {
        "main-img": "url('./src/assets/Bg-image.jpg')",
        "dark-img": "url('./src/assets/bg-dark-image.jpg')",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
      },
      fontSize: {
        base: "16px",
      },
      lineHeight: {
        base: "28px",
      },
    },
  },
  plugins: [],
};
