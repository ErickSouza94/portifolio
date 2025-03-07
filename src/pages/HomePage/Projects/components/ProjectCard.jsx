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
    <div className="flex flex-col md:flex-row items-center  md:justify-center md:gap-x-[40px] lg:gap-[400px] px-20 sm:px-10 py-5 pb-20 border-b border-gray-400">
      <div>
        <img
          src={image}
          alt={`imagem do projeto ${title}`}
          className="w-[400px] h-[320px] max-w-2xl max-h-auto rounded-lg shadow-md text-left bg-gray-500"
        />
      </div>
      {/* Conteúdo do projeto */}
      <div className="mt-4 md:mt-0">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md mt-2 opacity-60">{description}</p>
        <div className="mt-4 text-lg">
          <h3 className="font-semibold">Informações do projeto</h3>
          <p>Ano: {year}</p>
          <p>Função: {role}</p>
        </div>
        <div className="mt-4 flex gap-5 ">
          <a href={linkProject}>Deploy do projeto</a>
          <a href={githubLink}>Vejo no GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
