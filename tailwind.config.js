// eslint-disable-next-line no-undef
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Ajuste o caminho conforme necessário
    ],
    theme: {
      extend: {},
      screens: {
        sm: "320px", // Celulares grandes
        md: "768px", // Tablets
        lg: "1024px", // Laptops
        xl: "1280px", // Monitores grandes
        "2xl": "1536px", // Monitores ultra-wide
      },
    },
    plugins: [],
  };