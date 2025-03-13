import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  // Atualiza o estado ao digitar nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Chama a função de envio passada como prop
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Passa os dados para a função do componente pai
  };

  return (
    <div className="mx-auto p-5 bg-neutral-950 text-white rounded-lg shadow-lg w-full max-w-[600px] h-[500px] flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Me envie um email
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 ">
        <input
          type="text"
          name="name"
          placeholder="Nome"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-neutral-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-neutral-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Assunto"
          value={formData.subject}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-neutral-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Mensagem"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded bg-neutral-800 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <div className="pt-5">
          <button
            type="submit"
            className="w-full p-2 bg-[#D3E97A] hover:bg-emerald-50 text-gray-800 font-bold rounded transition"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
