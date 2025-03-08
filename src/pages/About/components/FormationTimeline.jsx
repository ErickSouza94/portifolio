const experiences = [
  {
    year: "2022-(em curso)",
    title: "Análise e Desenvolvimento de Sistemas ",
    instituition: "Estácio de Sá",
    description:
      "Graduando em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento de software, programação, banco de dados, análise de sistemas e gestão de projetos.",
  },
  {
    year: "2020-2021",
    title: "Desenvolvimento Web ",
    instituition: "Curso em Vídeo",
    description:
      "Curso de Desenvolvimento Web, com foco em HTML, CSS, JavaScript, Python.",
  },
  {
    year: "2024",
    title: "Desenvolvedor Full-Stack ",
    instituition: "Udemy",
    description:
      " Curso de Desenvolvimento Full-Stack, com foco em HTML, CSS, Bootstrap, JavaScript, React, PHP, SQL, entre outros.",
  },
  {
    year: "2025",
    title: "Jornada Full-Stack ",
    instituition: "Hashtag Treinamentos",
    description:
      "Certificado de conclusão de curso, onde foi concluído um projeto clone do Spotify, utilizando ReactJS para o front-end e MongoDB para o back-end",
  },
  {
    year: "2016-2020",
    title: "Licenciatura em História",
    instituition: "Estácio de Sá",
    description:
      "Graduado em Licenciatura em História, com foco em ensino de História, metodologias de ensino, pesquisa e produção de conhecimento.",
  },
];

// Função para retornar o ano em ordem cronológica
const sortExperiences = experiences.sort((a, b) => (a.year > b.year ? 1 : -1));

const FormationTimeline = () => {
  return (
    <div className="container px-28 py-12">
      <div className="border-l-4 border-gray-300 pl-5">
        {sortExperiences.map((exp, index) => (
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

export default FormationTimeline;
