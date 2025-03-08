import { FaGithub, FaLinkedinIn } from "react-icons/fa6"

const MoreAboutTop = () => {
  return (
<div className="flex flex-col justify-between md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[100px]">
        <div className="text-3xl px-30">
          <h1 className="text-2xl font-bold">Sobre mim</h1>
        </div>

        <div className="px-10">
          <h2 className="text-3xl pt-10 pb-5">Front-end developer </h2>
          <p className="text-md pb-20 w-[500px]">
            Me chamo Erick, sou Desenvolvedor Front-end, com formação em
            História e atualmente cursando Análise e Desenvolvimento de
            Sistemas. Possuo experiência na criação de interfaces modernas e
            dinâmicas com React.js, JavaScript (ES6+), NextJs, HTML, CSS e
            Bootstrap e Tailwind. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Deserunt odio provident numquam quidem asperiores
            qui reprehenderit nisi libero saepe optio? Nobis dolores provident
            excepturi voluptate rerum praesentium accusantium odit harum! lorem
          </p>
          <div className="buttons pt-10 flex gap-5 items-center">
            <button
              className="py-2 w-fit px-10 border-1 rounded-xl bg-[#D3E97A] text-black font-semibold
                    hover:bg-white transition-colors duration-300 cursor-pointer
                    transform hover:scale-105"
            >
              <a
                href="/cv-europass-dev.pdf"
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
      </div>  )
}

export default MoreAboutTop