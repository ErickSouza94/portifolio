import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Mc-Donalds",
        description: "Este projeto foi desenvolvido com o objetivo de criar uma aplicação de autoatendimento para restaurantes, no caso, utilizei o Mc-Donalds como exemplo." ,
        image: "/mc-donalds.png" ,
        year: "2025" ,
        role: "front-end",
        linkProject: "https://mc-donalds-autoatendimento.vercel.app/mc-donalds" ,
        githubLink: "https://github.com/ErickSouza94/mc-donalds",
    },
    {
        title: "Player Spotify",
        description: "Este projeto é um clone simplificado do player do Spotify, desenvolvido para praticar habilidades em desenvolvimento web com React, design de interfaces e construção e consumo de APIs.",
        image: "/spotify.png" ,
        year: "2025",
        role: "front-end / back-end" ,
        linkProject: "https://spotify-player-i0gn.onrender.com",
        githubLink: "https://github.com/ErickSouza94/spotify-player",
    },
    {
        title: "Nossos Filmes",
        description: "A aplicação é uma plataforma simples para explorar filmes, onde os usuários podem buscar filmes e visualizar detalhes deles. Projeto feito em React, consumindo API da MDB." ,
        image: "/nossos-filmes.png",
        year: "2025",
        role: "front-end",
        linkProject: "https://nossos-filmes-one.vercel.app",
        githubLink: "https://github.com/ErickSouza94/nossos-filmes" ,
    },
    {
        title: "Finans" ,
        description: "Uma landing page para site de finanças. Utilizando HTML e CSS.",
        image: "/finans.png",
        year: "2024",
        role: "front-end",
        linkProject: "https://ericksouza94.github.io/projeto-finans/",
        githubLink: "https://github.com/ErickSouza94/projeto-finans",
    },
]

const Cards = () => {
    
  return (
   <div>
        {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
        ))}
   </div>
  );
};

export default Cards;
