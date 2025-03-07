import { Link } from "react-router-dom";
import Cards from "./components/Cards";

const Projects = () => {
  return (
    <section className="flex flex-col justify-between gap-6 border-b-3 border-gray-500 pb-6">
      <h1>Projetos Realizados</h1>
      <Cards />
      <div className="flex justify-center">
        <Link
          to="/allprojects"
          className="w-50 py-2 text-center font-semibold text-xl border-2 border-gray-400 rounded-full"
        >
          Ver mais projetos
        </Link>
      </div>
    </section>
  );
};

export default Projects;
