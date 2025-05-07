"use client";

import { Linkedin, Menu, X  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header" className="fixed top-0 w-full flex justify-between items-center h-20 px-6 md:px-10  shadow-md z-50">
      {/* Logo */}
      <div className="text-2xl font-bold">
        Natan<span className="text-red-500 text-3xl">.</span>
      </div>

      {/* Botão de Menu para Mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 cursor-pointer">
          {menuOpen ? <X size={28} color="currentColor" /> : <Menu size={28} color="currentColor" />}
        </button>
      </div>

      {/* Navegação - Desktop & Mobile */}
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row items-center gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white  shadow-md md:shadow-none py-4 md:py-0 transition-all rounded-xl`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 text-gray-800">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">Sobre Mim</a></li>
          <li><a href="#tech" className="hover:underline">Tecnologias</a></li>
          <li><a href="#projects" className="hover:underline">Projetos</a></li>
        </ul>
      </nav>

      {/* Botão do LinkedIn */}
      <div className="hidden md:flex items-center">
        <Button
          variant="outline"
          className="border-2 border-gray-800 px-4 py-2 rounded-full text-gray-800 cursor-pointer gap-2 transform transition-transform hover:scale-105 hover:underline"
        >
          <Linkedin size={18} color="currentColor" /> <Link href="https://www.linkedin.com/in/natanssilva/" target="_blank"  rel="noopener noreferrer">Ver perfil</Link>
        </Button>
      </div>
    </header>
  );
}
