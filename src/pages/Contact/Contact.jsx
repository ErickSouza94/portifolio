import { useState } from "react";

import { GrMap } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import MarkerMap from "./components/MarkerMap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulário enviado com sucesso!")

    //Resetar o formulário
    setFormData((prevState) => ({
      ...prevState,
      nome: "",
      email: "",
      assunto: "",
      mensagem: "",
    }));
  }
  return (
    <div className="flex flex-col justify-around items-center text-2xl gap-10 md:flex-row md:gap-4">
      <div className="contato flex flex-col gap-10">
        <h1 className="flex justify-center items-center">Contato</h1>
        <h3 className="flex flex-row items-center gap-5">
          <GrMap />
          Leiria, Portugal
        </h3>
        <h3 className="flex flex-row items-center justify-items-start gap-5">
          <MdEmail />
          erick.ssouza94@gmail.com
        </h3>
        <h3 className="flex flex-row items-center justify-items-start gap-5">
          <FaWhatsapp /> +55 (21)969096183
        </h3>

        <div className="mapa flex flex-col justify-items-center text-center">
          <MarkerMap />
        </div>
      </div>

      <div className="email flex flex-col justify-center items-center p-4 rounded-lg mt-20 w-[25%] h-auto">
        <form onSubmit={handleSubmit} className="border-1 border-[#1a1a1a] rounded-xl p-4">
          <div className="w-[600px] h-[85px] ">
            <label htmlFor="nome" className="w-[44px] h-[26px]  text-[20px]">
              Nome:
            </label>
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                className="w-full h-[50px] bg-[#1A1A1A] p-4 rounded-xl"
              />
            </div>
          </div>
          <div className="pt-4">
            <label htmlFor="email" className="w-[44px] h-[26px] text-[20px] ">
              Email:
            </label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Digite seu email"
                value={formData.email}
                onChange={handleChange}
                className="w-[600px] h-[50px] bg-[#1A1A1A] p-4 rounded-2xl"
              />
            </div>
          </div>
          <div className="pt-4">
            <label
              htmlFor="assunto"
              className="w-[44px] h-[26px] pb-8 text-[20px]"
            >
              Assunto:
            </label>
            <div>
              <input
                type="text"
                name="assunto"
                placeholder="Assunto"
                value={formData.assunto}
                onChange={handleChange}
                className="w-[600px] h-[50px] bg-[#1A1A1A] p-4 rounded-2xl"
              />
            </div>
          </div>
          <div className="pt-4">
            <label htmlFor="mensagem" className="w-[44px] h-[26px] text-[20px]">
              Mensagem:
            </label>
            <div className="pb-2">
              <textarea
                name="mensagem"
                placeholder="Sua mensagem aqui"
                value={formData.mensagem}
                onChange={handleChange}
                className="w-[600px] h-[400px] bg-[#1A1A1A] p-4 rounded-2xl "
              ></textarea>
            </div>
          </div>
          <button type="submit" className="text-white w-full font-semibold rounded-xl p-3 hover:bg-[#1A1A1A] transition-colors duration-300 cursor-pointer transform hover:scale-105">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
