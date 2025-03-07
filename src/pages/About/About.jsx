const About = () => {
  return (
    <div className="flex justify-around md:gap-5 lg:gap-10 py-40 lg:h-[800px] border-b border-gray-400">
      <div className="text-3xl pt-5 px-40">
        <h1 className="font-bold">Sobre mim</h1>
      </div>

      <div className="px-10">
        <h2 className="text-3xl pt-10 pb-5 md:flex-col">Front-end developer </h2>
        <p className="text-md pb-20 w-[500px]">
          Me chamo Erick, sou Desenvolvedor Front-end, com formação em História
          e atualmente cursando Análise e Desenvolvimento de Sistemas. Possuo
          experiência na criação de interfaces modernas e dinâmicas com
          React.js, JavaScript (ES6+), NextJs, HTML, CSS e Bootstrap e Tailwind.
        </p>
        <a href="">Mais sobre mim</a>
      </div>
    </div>
  );
};

export default About;
