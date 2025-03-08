const Header = () => {
  return (
    <div className="flex justify-between items-center p-8 border-b-1 border-gray-500 w-full bg-black ">
        <h2 className="text-4xl font-semibold"><a href="/">Erick Souza</a></h2>
    
        <ul className="flex gap-5">
          <a href="">
            <li>Projetos</li>
          </a>
          <a href="">
            <li>Sobre</li>
          </a>
          <a href="">
            <li>Contato</li>
          </a>
        </ul>
      
    </div>
  );
};

export default Header;
