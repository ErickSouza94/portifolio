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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      access_key: "79e89598-119b-4db1-bed3-f8df8b88b126", // Key para o web3forms
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Mensagem enviada com sucesso!");

        // 2. Reseta o formulário apenas se tiver sucesso
        setFormData({
          name: "",
          email: "",
          assunto: "",
          mensagem: "",
        });
      } else {
        alert("Erro ao enviar: " + result.message);
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Erro na conexão com o servidor de e-mail.");
    }
  };

  return (
    <div className="flex flex-col justify-around items-center text-2xl gap-10 xl:flex-row md:gap-4 p-4">
      <div className="contato flex flex-col gap-10 ">
        <h1 className="flex justify-center items-center">Contato</h1>
        <h3 className="flex flex-row items-center gap-5">
          <GrMap />
          Marinha Grande - Leiria, Portugal
        </h3>
        <h3 className="flex flex-row items-center justify-items-start gap-5">
          <MdEmail />
          erick.ssouza94@gmail.com
        </h3>
        <h3 className="flex flex-row items-center justify-items-start gap-5">
          <FaWhatsapp /> +351 932874684
        </h3>

        <div className="mapa flex flex-col justify-items-center text-center">
          <MarkerMap />
        </div>
      </div>

      <div className="email flex flex-col justify-center items-center p-4 rounded-lg mt-10 md:mt-10 h-auto w-full max-w-[600px]">
        <form
          onSubmit={handleSubmit}
          className="border border-[#1a1a1a] rounded-xl p-2 w-full sm:w-full"
        >
          <div>
            <label htmlFor="name" className="w-full h-[26px] text-[20px]">
              Nome:
            </label>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-[50px] bg-[#1A1A1A] p-4 rounded-xl text-white"
              />
            </div>
          </div>

          <div className="pt-4">
            <label htmlFor="email" className="w-full h-[26px] text-[20px]">
              Email:
            </label>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Seu email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full h-[50px] bg-[#1A1A1A] p-4 rounded-2xl text-white"
              />
            </div>
          </div>

          <div className="pt-4">
            <label
              htmlFor="assunto"
              className="w-full h-[26px] pb-8 text-[20px]"
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
                className="w-full h-[50px] bg-[#1A1A1A] p-4 rounded-2xl text-white"
              />
            </div>
          </div>

          <div className="pt-4">
            <label htmlFor="mensagem" className="w-full h-[26px] text-[20px]">
              Mensagem:
            </label>
            <div className="pb-2">
              <textarea
                name="mensagem"
                placeholder="Mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                className="w-full h-[400px] bg-[#1A1A1A] p-4 rounded-2xl text-white"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="text-white w-full font-semibold rounded-xl p-3 bg-[#1a1a1a] hover:bg-[#333] transition-colors duration-300 cursor-pointer transform hover:scale-105"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
