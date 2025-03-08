import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Forms from "./components/Forms";

const handleFormSubmit = (data) => {
    console.log("Dados enviados:", data)
    alert("Formulário enviado com sucesso!")
}

const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-around md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[100px]">
      <div className="text-3xl px-30">
        <h1 className="font-bold">Entre em contato</h1>
        <p className="text-lg">Email: <a href="mailto:erick.ssouza94@gmail.com"
        className="hover:text-blue-700 transform hover:scale-105 transition duration-300">erick.ssouza94@gmail.com</a></p>
        <p className="text-lg">Para mais informações, aqui <a href="/cv-europass-dev.pdf"
        download={"Erick_Souza_Dev_Resume.pdf"}
        className="hover:text-blue-700 transform hover:scale-105 transition duration-300"
        >meu currículo</a>.
        </p>

        <div className="flex flex-col">
          <div className="pt-10 flex gap-5 text-center justify-start">
            <FaLinkedinIn className="text-[#D3E97A] bg-black" />{" "}
            <span className="items-center text-center text-lg">
              <a href="https://www.linkedin.com/in/ericksouza94/"
              target="_blank">Linkedin</a>
            </span>
          </div>
          <div className="pt-10 flex gap-5 text-center justify-start">
            <FaGithub className="text-[#D3E97A] bg-black" />{" "}
            <span className="items-center text-center text-lg">
              <a href="https://github.com/ErickSouza94"
              target="_blank">GitHub</a>
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 md:w-[600px] pt-20"><Forms
      initialData={{name: "", email: "", subject: "", message: "" }}
      onSubmit={handleFormSubmit}/>
      </div>
    </div>
  );
};

export default Connect;
