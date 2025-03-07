import perfil from "/perfil.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex flex-col justify-center h-svh border-b-3 border-gray-500">
      <div className="flex justify-around items-center px-20 mt-[-250px] gap-50">
        <div className="w-auto h-auto text-3xl">
          <h1 className="font-bold">
            OLÁ, EU ME CHAMO <br /> ERICK SOUZA
          </h1>
          <p className="text-2xl mt-2 opacity-60">
            Desenvolvedor front-end com foco em desenvolvimento com React,
            Tailwind
          </p>
          <div className="contatos pt-10 flex gap-5 items-center">
            <button className="py-2 px-14 border-1 rounded-xl bg-[#D3E97A] text-black font-semibold">
              Contato
            </button>
            <FaLinkedinIn className="text-[#D3E97A] bg-black" />
            <FaGithub className="text-[#D3E97A] bg-black" />
          </div>
        </div>
        <div className="">
          <img
            src={perfil}
            alt="imagem de perfil"
            className="w-[250px] max-w-full h-auto pt-20 object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
