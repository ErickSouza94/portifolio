import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        "OLÁ, EU ME CHAMO \nERICK SOUZA",
        2000,
        "SEJA BEM-VINDO(A) AO MEU PORTFÓLIO!",
        2000,
      ]}
      wrapper="h1"
      speed={50}
      repeat={Infinity}
      style={{ whiteSpace: "pre-wrap", fontWeight:"bolder" }}
     
    />
  );
};

export default Animation;
