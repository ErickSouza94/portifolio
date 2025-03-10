import { useState, useEffect } from "react";
import PropTypes from "prop-types"

const AllProjects = ({moreProjects = false}) => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getApiGitHub = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/ErickSouza94/repos"
        );
        if (!res.ok) throw new Error(`Erro: ${res.status}`);

        const data = await res.json();

        const sortedRepos = data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setRepos(sortedRepos);
      } catch (e) {
        setError(e.message);
      }
    };

    getApiGitHub();
  }, []);

  return (
    <div className="p-4">
      <h2 className="font-semibold pb-10 flex justify-center text-3xl">
        Meus Repositórios
      </h2>
      {error && <p className="text-red-500">{error}</p>}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {repos.map((repo) => (
          <li key={repo.id} className="p-4 border border-gray-700 rounded-lg">
            <strong className="block text-base truncate">{repo.name.toUpperCase()}</strong>
            <span className="block break-words">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.html_url}
              </a>
            </span>
            <span className="block text-gray-400">
              Data Criação:{" "}
              {new Intl.DateTimeFormat("pt-BR").format(
                new Date(repo.created_at)
              )}
            </span>

            {/* Se moreProjects for true, exibir detalhes */}
            {moreProjects && (
                <div className="mt-2 text-gray-300 text-sm">
                    <p><strong>Descrição:</strong> {repo.description || "Sem descrição"}</p>
                </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

AllProjects.propTypes = {
    moreProjects: PropTypes.bool
}

export default AllProjects;
