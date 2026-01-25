import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import working from "/working.jpeg";
import Tools from "../../../components/Tools";

const MoreAboutTop = () => {
  return (
    <div className="flex flex-col justify-around md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[100px]">
      <div className="text-3xl w-full sm:flex sm:flex-col sm:items-center">
        <h1 className="text-2xl font-bold text-center">Sobre mim</h1>
        <img
          src={working}
          alt="imagem"
          className="hidden md:block w-[500px] max-w-full h-[460px] object-fill rounded-full"
        />
        <div className="buttons hidden md:flex justify-center pt-10 gap-5 items-center ">
          <button
            className="py-2 w-fit px-10 border rounded-xl bg-[#D3E97A] text-black font-semibold
                    hover:bg-white transition-colors duration-300 cursor-pointer
                    transform hover:scale-105 text-[20px] whitespace-nowrap"
          >
            <a href="/cv-erick-tech.pdf" download={"cv-erick-tech.pdf"}>
              <span className="flex w-full items-center justify-between gap-5">
                {" "}
                Download CV
                <div className="w-2 bg-black rounded-full h-2" />
              </span>
            </a>
          </button>
          <a
            href="https://www.linkedin.com/in/ericksouza94/"
            target="_blank"
            className="hover:scale-150 transition duration-300 "
          >
            <FaLinkedinIn className="text-[#D3E97A] bg-black w-[20px] h-[25px]" />
          </a>
          <a
            href="https://github.com/ErickSouza94"
            target="_blank"
            className="hover:scale-150 transition duration-300"
          >
            <FaGithub className="text-[#D3E97A] bg-black w-[20px] h-[25px]" />
          </a>
        </div>
      </div>

      <div className="px-10 py-10 w-full">
        <h2 className="text-[32px] pb-10 font-semibold text-center">
          Front-end developer{" "}
        </h2>
        <p className="text-[22px] pb-20 w-full">
          Me chamo Erick Souza, moro atualmente em Portugal e sou um
          Desenvolvedor Front-end com foco em desenvolvimento web utilizando
          ferramentas atuais como React, JavaScript, HTML, CSS, Bootstrap NodeJs
          e Tailwind. Minha trajetória combina educação tecnológica e
          programação, permitindo-me criar interfaces modernas e interativas.
          <br />
          <br />
          Tenho experiência na criação de aplicações web responsivas e em
          integração de APIs, sempre buscando aprimorar a acessibilidade e
          experiência do usuário. Além disso, minha atuação na educação
          tecnológica me proporcionou habilidades em ensino de programação,
          metodologias ativas e projetos STEAM. Atualmente, estou focado em
          aprimorar minhas habilidades como desenvolvedor, explorando React.js,
          Next.js e arquitetura de software.
          <br />
          <br />
          Sempre aberto para novos conhecimentos!
        </p>

        <div className="flex flex-col items-center text-center w-full">
          <p className="text-2xl font-semibold">Tecnologias utilizadas:</p>
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default MoreAboutTop;
