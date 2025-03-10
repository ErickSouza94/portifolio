import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import working from "/working.jpeg";

const MoreAboutTop = () => {
  return (
    <div className="flex flex-col justify-around md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[100px]">
      <div className="text-3xl px-30">
        <h1 className="text-2xl font-bold text-center">Sobre mim</h1>
        <img
          src={working}
          alt="imagem"
          className="w-[500px] max-w-full h-[460px] object-fill rounded-full"
        />
      </div>

      <div className="px-10 py-10">
        <h2 className="text-[32px] pt-10 pb-5">Front-end developer </h2>
        <p className="text-[20px] pb-20 w-[500px]">
          Me chamo Erick Souza, moro atualmente em Portugal e sou um
          Desenvolvedor Front-end com foco em desenvolvimento web utilizando
          ferramentas atuais como React, JavaScript, HTML, CSS, Bootstrap NodeJs
          e Tailwind. Minha trajetória combina educação tecnológica e
          programação, permitindo-me criar interfaces modernas e interativas.
          <br /><br />
          Tenho experiência na criação de aplicações web responsivas e em
          integração de APIs, sempre buscando aprimorar a acessibilidade e
          experiência do usuário. Além disso, minha atuação na educação
          tecnológica me proporcionou habilidades em ensino de programação,
          metodologias ativas e projetos STEAM. Atualmente, estou focado em
          aprimorar minhas habilidades como desenvolvedor, explorando React.js,
          Next.js e arquitetura de software. 
          <br /><br />
          Sempre aberto para novos conhecimentos!
        </p>
        <div className="buttons pt-10 flex gap-5 items-center">
          <button
            className="py-2 w-fit px-10 border-1 rounded-xl bg-[#D3E97A] text-black font-semibold
                    hover:bg-white transition-colors duration-300 cursor-pointer
                    transform hover:scale-105"
          >
            <a
              href="/erick-dev-europass.pdf"
              download={"Erick_Souza_Dev_Resume.pdf"}
            >
              <span className="flex w-[100%] items-center justify-between gap-5">
                {" "}
                Download CV
                <div className="w-[8px] bg-black rounded-full h-2" />
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
    </div>
  );
};

export default MoreAboutTop;
