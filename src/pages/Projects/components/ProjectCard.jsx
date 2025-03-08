/* eslint-disable react/prop-types */
const ProjectCard = ({
  title,
  description,
  image,
  year,
  role,
  linkProject,
  githubLink,
}) => {
  return (
    <div className="flex flex-col items-center justify-around md:gap-5 lg:flex-row lg:gap-10 border-b border-gray-400 pb-[80px] pt-10">
      <div>
        <img
          src={image}
          alt={`imagem do projeto ${title}`}
          className="w-[400px] h-[320px] max-w-2xl max-h-auto rounded-lg shadow-md text-left bg-gray-500"
        />
      </div>
      {/* Conteúdo do projeto */}
      <div className="mt-4 md:mt-0 w-[450px]">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-xl mt-2 opacity-60">{description}</p>
        <div className="mt-4 text-lg">
          <h3 className="font-semibold text-xl">Informações do projeto</h3>
          <p className="text-xl">Ano: {year}</p>
          <p className="text-xl">Função: {role}</p>
        </div>
        <div className="mt-4 flex gap-5 text-2xl ">
          <a href={linkProject} className="hover:text-[#D3E97A] transition duration-300 ">Deploy do projeto</a>
          <a href={githubLink} className="hover:text-[#D3E97A] transition duration-300">Vejo no GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
