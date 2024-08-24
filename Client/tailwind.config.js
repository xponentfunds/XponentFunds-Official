/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Title: ["Azonix", "serif"],
      },
      backgroundImage: {
        "gradient-to-r":
          "linear-gradient(90.21deg, #83249A 21.39%, #0025DA 99.82%)",
        "custom-gradient":
          "linear-gradient(180deg, #C600F6 0%, #5300DA 156.72%)",
        "custom-linear":
          "linear-gradient(90deg, #6000AB 14.89%, #FB4BFF 50.67%, #5300DA 84.63%)",
        "black-gradient":
          "linear-gradient(106.18deg, #313131 22.72%, rgba(32, 30, 30, 0.54) 87.16%)",
        "contact-linear":
          "linear-gradient(121.82deg, #C600F6 4.84%, #5300DA 95.72%)",
      },
    },
  },
  plugins: [],
};
