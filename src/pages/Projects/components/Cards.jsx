import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Mc-Donalds",
    description:
      `A aplicação foi desenvolvida com React, Next.ts e TypeScript, utilizando o Tailwind CSS para estilização. O projeto é uma simulação de um sistema de autoatendimento, onde o usuário pode navegar pelo cardápio, adicionar itens ao carrinho e finalizar o pedido.  `,
    tools: [
        "Next.js :'15.1.6' | ", 
        "React: ^19.0.0 | ",
        "React DOM: ^19.0.0 | ",
        "React Hook Form: ^7.54.2 | ",
        "@prisma/client: ^6.2.1 | ",
        "Tailwind CSS: ^3.4.1 | ",
        "TypeScript: ^5 | ",
        "ts-node: ^10.9.2"      
    ],
    image: "/mc-donalds.png",
    year: "2025",
    role: "front-end",
    linkProject: "https://mc-donalds-autoatendimento.vercel.app/mc-donalds",
    githubLink: "https://github.com/ErickSouza94/mc-donalds",
  },
  {
    title: "Player Spotify",
    description:
      "O objetivo deste projeto é recriar a interface do player do Spotify e desenvolver uma API para gerenciar dados, permitindo a reprodução de músicas e armazenamento de informações no MongoDB. Para o Backend utilizei Node.js, Express e MongoDB. O Frontend foi desenvolvido com ReactJS e Tailwind CSS.",
    image: "/spotify.png",
    tools: [
        "React: ^19.0.0 | ",
        "React-dom: ^19.0.0 | ",
        "React-icons: ^5.4.0 | ",
        "React-router-dom: ^7.1.5 | ",
        "MongoDB: ^6.13.0 | ",
        "Axios: ^1.7.9 | ",
        "Express: ^4.21.2 | ",
    ],
    year: "2025",
    role: "front-end / back-end",
    linkProject: "https://spotify-player-i0gn.onrender.com",
    githubLink: "https://github.com/ErickSouza94/spotify-player",
  },
  {
    title: "Nossos Filmes",
    description:
      "A aplicação é uma plataforma simples para explorar filmes, onde os usuários podem buscar filmes e visualizar detalhes deles. Projeto feito em React, consumindo API da MDB.",
    tools: [
        "react: ^18.3.1 | ",
        "react-dom: ^18.3.1 | ",
        "react-icons: ^5.4.0 | ",
        "react-router-dom: ^7.1.4 | ",
      ],
    image: "/nossos-filmes.png",
    year: "2025",
    role: "front-end",
    linkProject: "https://nossos-filmes-one.vercel.app",
    githubLink: "https://github.com/ErickSouza94/nossos-filmes",
  },
  {
    title: "Finans",
    description:
      "Uma landing page para site de finanças. Utilizando HTML e CSS.",
    image: "/finans.png",
    year: "2024",
    role: "front-end",
    linkProject: "https://ericksouza94.github.io/projeto-finans/",
    githubLink: "https://github.com/ErickSouza94/projeto-finans",
  },
];

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
