import About from "../About/About";
import Connect from "../Connect/Connect";
import Projects from "../Projects/Projects";
import perfil from "/perfil.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="global pt-[100px] flex flex-col justify-center border-b-3 border-gray-500 gap-[50px] px-[20px]">
      <div className="flex justify-between items-center gap-50 h-[700px] w-[100%] main pb-20 border-b-3 border-gray-500">
        <div className="w-auto text-3xl lado-esquerdo">
          <h1 className="font-bold">
            OLÁ, EU ME CHAMO <br /> ERICK SOUZA
          </h1>
          <p className="text-2xl mt-2 opacity-60">
            Desenvolvedor front-end com foco em React, Tailwind...
          </p>
          <div className="contatos pt-10 flex gap-5 items-center">
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
        <div className="lado-direito">
          <img
            src={perfil}
            alt="imagem de perfil"
            className="w-[600px] max-w-full h-[700px] pt-20 object-fill rounded-full"
          />
        </div>
      </div>
      <Projects/>
      <About />
      <Connect/>
    </div>
  );
};

export default Home;
