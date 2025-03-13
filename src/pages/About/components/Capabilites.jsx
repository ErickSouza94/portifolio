const Capabilites = () => {
  return (
    <div className="flex flex-col items-center justify-around md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[20px]">
      <div className="flex items-center justify-center gap-10 text-3xl ">
        <h1 className="text-[10px] font-bold pt-10 text-center self-start">
          Minhas Capacidades
        </h1>
      </div>

      <div className="px-10 py-10 w-[100%] max-w-[500px]">
        <h2 className="text-[32px] font-semibold pb-5 pt-10">
          Habilidades Técnicas
        </h2>
        <ul className="list-disc text-[20px] pb-20 w-[100%] max-w-[500px] text-2xl pl-[25px] ">
          <li className="pb-3">
            <strong> Front-end:</strong> React.js, JavaScript (ES6+), Next.js,
            HTML, CSS, Bootstrap, Tailwind
          </li>
          <li className="pb-3">
            <strong>Back-end</strong>: Noções de Node.js, Express.js, MongoDB
            (aprendizado Full-Stack)
          </li>
          <li className="pb-3">
            <strong>Ferramentas:</strong> Git, GitHub, Figma, Metodologias Ágeis
            (Scrum)
          </li>
          <li className="pb-3">
            <strong>Outros:</strong> Integração de APIs, UX/UI, Edição de vídeos
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Capabilites;
