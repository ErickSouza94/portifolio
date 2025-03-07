import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Forms from "./Forms";

const handleFormSubmit = (data) => {
    console.log("Dados enviados:", data)
    alert("Formulário enviado com sucesso!")
}

const Connect = () => {
  return (
    <div className="flex justify-around md:gap-25 lg:gap-10 py-40 lg:h-[800px] border-b border-gray-400">
      <div className="text-3xl pt-5 px-30">
        <h1 className="font-bold">Entre em contato</h1>
        <p className="text-lg">Email: erick.ssouza94@gmail.com</p>
        <p className="text-lg">Para mais informações, aqui meu currículo.</p>

        <div className="flex flex-col">
          <div className="pt-10 flex gap-5 text-center justify-start">
            <FaLinkedinIn className="text-[#D3E97A] bg-black" />{" "}
            <span className="items-center text-center text-lg">
              <a href="">Linkedin</a>
            </span>
          </div>
          <div className="pt-10 flex gap-5 text-center justify-start">
            <FaGithub className="text-[#D3E97A] bg-black" />{" "}
            <span className="items-center text-center text-lg">
              <a href="">GitHub</a>
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 w-[500px] pt-20 pb-25"><Forms
      initialData={{name: "", email: "", subject: "", message: "" }}
      onSubmit={handleFormSubmit}/>
      </div>
    </div>
  );
};

export default Connect;
