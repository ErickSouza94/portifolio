import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("more-about");
    window.scroll(0, 0);
  };

  return (
    <div className="flex flex-col items-center justify-around md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[100px]">
      <div className="text-3xl pt-5 px-30">
        <h1 className="text-2xl font-bold">Sobre mim</h1>
      </div>

      <div className="px-5 md:px-10 max-w-[500px] w-full">
        <h2 className="text-4xl font-semibold pt-10 pb-5">
          Front-end developer{" "}
        </h2>
        <p className="text-2xl pb-20 max-w-[500px]">
          Me chamo Erick, sou Desenvolvedor Front-end, com formação em História
          e atualmente cursando Análise e Desenvolvimento de Sistemas. Possuo
          experiência na criação de interfaces modernas e dinâmicas com
          React.js, JavaScript (ES6+), NextJs, HTML, CSS e Bootstrap e Tailwind.
        </p>
        <button
          className="more-about-button hover:text-[#D3E97A] hover:underline transition-colors duration-200 cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-xl">Mais sobre mim</span>
        </button>
      </div>
    </div>
  );
};

export default About;
