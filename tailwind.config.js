// eslint-disable-next-line no-undef
module.exports = {
    theme: {
      extend: {},
      screens: {
        sm: { max: "767px" },   // Até 767px (Mobile)
        md: { min: "768px", max: "1023px" },  // Entre 768px e 1023px (Tablet)
        lg: { min: "1024px", max: "1279px" }, // Entre 1024px e 1279px (Laptop)
        xl: { min: "1280px" }  // Acima de 1280px (Monitores grandes)
      }
    },
    plugins: [],
  };