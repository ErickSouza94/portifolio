import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative flex justify-between items-center p-6 border-b border-gray-500 mx-auto bg-black ">
      {/* Logo */}
      <h1 className="text-2xl font-semibold hover:scale-110 transition duration-300">
        <a href="/">Erick Souza</a>
      </h1>

      {/* Ícone do Menu (Fica sempre visível) */}
      <div
        className={`md:hidden text-3xl cursor-pointer z-1500 ${
          menuOpen && "fixed right-10"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex gap-15 text-2xl">
        <li className="hover:underline">
          <a href="more-projects">Projetos</a>
        </li>
        <li className="hover:underline">
          <a href="more-about">Sobre</a>
        </li>
        <li className="hover:underline">
          <a href="contact">Contato</a>
        </li>
      </ul>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menu Mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-1499 bg-[#000000db] flex flex-col items-center pt-30 text-2xl border-2 border-gray-500 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full "
        }`}
      >
        {/* Links do Menu */}
        <a
          href="more-projects"
          className="mb-4 border-2 w-full p-5 text-center hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          Projetos
        </a>
        <a
          href="more-about"
          className="mb-4 border-2 w-full p-5 text-center hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          Sobre
        </a>
        <a
          href="contact"
          className="mb-4 border-2 w-full p-5 text-center hover:underline"
          onClick={() => setMenuOpen(false)}
        >
          Contato
        </a>
      </div>
    </header>
  );
};

export default Header;
