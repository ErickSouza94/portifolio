/* eslint-disable react/prop-types */
const ProjectCard = ({
  title,
  description,
  tools,
  image,
  year,
  role,
  linkProject,
  githubLink,
}) => {
  return (
    <div className="flex sm:flex flex-col md:flex-row items-center justify-around md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[80px] pt-10">
      <div>
        <img
          src={image}
          alt={`imagem do projeto ${title}`}
          className="w-full h-[320px] max-w-2xl max-h-auto rounded-lg shadow-md text-left bg-gray-500"
        />
      </div>
      {/* Conteúdo do projeto */}
      <div className="mt-4 md:mt-0 w-full">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-xl mt-2 opacity-60">{description}</p>
        <div className="mt-4 text-lg">
          <h3 className="font-semibold text-xl">Informações do projeto</h3>
          <p className="text-xl mt-2 mb-2 opacity-60">
            Ferramentas Utilizadas: {tools}
          </p>
          <p className="text-xl">Ano: {year}</p>
          <p className="text-xl">Função: {role}</p>
        </div>
        <div className="mt-4 flex gap-5 text-xl ">
          <a
            href={linkProject}
            target="_blank"
            className="hover:text-[#D3E97A] transition duration-300 "
          >
            Deploy do projeto
          </a>
          <a
            href={githubLink}
            target="_blank"
            className="hover:text-[#D3E97A] transition duration-300"
          >
            Vejo no GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
