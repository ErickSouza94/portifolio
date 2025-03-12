import About from "../About/About";
import Connect from "../Connect/Connect";
import Projects from "../Projects/Projects";
import perfil from "/perfil.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="global pt-[100px] flex flex-col justify-center border-b-3 border-gray-500 gap-[50px] px-[20px]">
      <div className="mx-auto flex flex-col-reverse md:flex-row justify-between items-center h-[700px]  pb-20 border-b-3 border-gray-500 gap-5">
        <div className="w-full p-5 md:text-2xl sm:text-xl sm:max-h-[650px]lado-esquerdo items-center">
          <h1 className="font-bold text-[1.5em] sm:w-[350px] ">
            OLÁ, EU ME CHAMO <br /> ERICK SOUZA
          </h1>
          <p className="text-xl md:text-xl max-w-[800px] md:max-w-[fit] mt-2 opacity-60">
            <strong className="title-sobre text-[#D3E97A] opacity-100 text-[30px] ">
              Desenvolvedor Front-End | React
            </strong>{" "}
            <br />
            Sou um desenvolvedor front-end apaixonado por criar interfaces
            modernas, intuitivas e responsivas. Especializado em React, Tailwind
            e JavaScript, foco na experiência do usuário e no desenvolvimento
            mobile-first. Sempre em busca de aprendizado contínuo e boas
            práticas para entregar soluções eficientes e acessíveis.
          </p>
          <div className="contatos md:p-5 pt-10 flex gap-5 items-center">
            <button
              className="text-center py-2 px-14 border-1 rounded-xl bg-[#D3E97A] text-black font-semibold
              hover:bg-white transition-colors duration-300 cursor-pointer
              transform hover:scale-105"
            >
              Contato
            </button>
            <a
              href="https://www.linkedin.com/in/ericksouza94/"
              target="_blank"
              className="hover:scale-150 transition duration-300 "
            >
              <FaLinkedinIn className="text-[#D3E97A] bg-black" />
            </a>
            <a
              href="https://github.com/ErickSouza94"
              target="_blank"
              className="hover:scale-150 transition duration-300"
            >
              <FaGithub className="text-[#D3E97A] bg-black" />
            </a>
          </div>
        </div>
        <div className="lado-direito hidden w-6xl md:block">
          <img
            src={perfil}
            alt="imagem de perfil"
            className="w-[500px] max-w-[50%] h-[700px] object-contain"
          />
        </div>
      </div>
      <Projects />
      <About />
      <Connect />
    </div>
  );
};

export default Home;
