import {useState, useEffect} from "react"

const AllProjects = () => {
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getApiGitHub = async () => {
            try {
                const res = await fetch("https://api.github.com/users/ErickSouza94/repos")
                if (!res.ok) throw new Error(`Erro: ${res.status}`)

                const data = await res.json()
                setRepos(data);
            } catch (e) {
                setError(e.message)
            }
        }

        getApiGitHub()
        
    },[]);


  return (
    <div className="p-4">
        <h2>Meus Repositórios</h2>
        {error && <p className="text-red-500">{error}</p>}
        <ul className="space-y-4">
            {repos.map((repo) => (
                <li key={repo.id} className="p-4 border border-gray-700 rounded-lg">
                    <strong className="block text-lg">{repo.name.toUpperCase()}</strong>
                    <span className="block">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.html_url}</a>
                    </span>
                    <span className="block text-gray-400">
                        Data Criação: {new Intl.DateTimeFormat("pt-BR").format(new Date(repo.created_at))}
                    </span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AllProjects;