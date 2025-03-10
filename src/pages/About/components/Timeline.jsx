const experiences = [
  {
    year: "2022-2024",
    title: "Analista Pedagógico - Educação Tecnológica",
    description:
      "Atuei como Analista Pedagógico de Tecnologia, capacitando profissionais e ministrando aulas de programação, robótica e tecnologia educacional, com foco em Scratch e Lego Education. Além de participar ativamente de projetos educacionais envolvendo planejamentos e programação em blocos, JavaScript e Python.",
  },
  {
    year: "2022",
    title: "Início na Educação Tecnológica",
    description:
      "Comecei a atuar com robótica educacional e programação para crianças e jovens, aplicando metodologias ativas (STEAM).",
  },
  {
    year: "2020-2021",
    title: "Desenvolvedor Front-end",
    description:
      "Atuei como Desenvolvedor Front-end freelancer, contribuindo para o desenvolvimento do site institucional de uma fábrica de cadeiras de rodas, utilizando HTML, CSS e JavaScript, garantindo interfaces acessíveis e responsivas.",
  },
];

const Timeline = () => {
  return (
    <div className="container py-12 break-words">
      <div className="border-l-4 border-gray-300 pl-5">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col md:flex-row items-start md:items-center"
          >
            <div className="md:ml-10">
              <h3 className="text-2xl font-semibold">
                {exp.year} - {exp.title}
              </h3>
              <p className="text-[20px] text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
