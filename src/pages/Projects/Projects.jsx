import { useState } from "react";
// import { Link } from "react-router-dom";
import Cards from "./components/Cards";
import AllProjects from "./components/AllProjects";

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };
  return (
    <section className="flex flex-col justify-between w-auto gap-6 border-b-3 border-gray-500 pb-6">
      <h1 >Projetos Realizados</h1>
      <Cards/>
      <div className="botao flex justify-center py-10">
        <button
          onClick={toggleAllProjects}
          className="w-[100%] py-4 text-center font-semibold text-xl border-2 border-gray-400 rounded-full cursor-pointer hover:scale-105 transition duration-300 hover:bg-[#D3E97A] hover:text-black"
        >
          <span className="text-2xl">{showAllProjects ? "Fechar Projetos" : "Ver mais projetos"}</span>
        </button>
      </div>
          {showAllProjects && 
          (
          <div className="max-h-96 overflow-y-auto border border-gray-300 rounded-lg p-4 mt-4 pb-[50px]">
            <AllProjects />
          </div>
          )}
    </section>
  );
};

export default Projects;
