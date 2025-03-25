"use client";

import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react'; // ou qualquer outra biblioteca para o ícone

const ScrollDown = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Adiciona o event listener para o scroll
    window.addEventListener('scroll', handleScroll);

    // Limpa o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 text-gray-500 text-sm mb-4 animate-bounce text-center ${scrolled ? 'hidden' : ''}`}
    >
      Role para explorar
      <div className="flex justify-center text-lg">
        <ArrowDown />
      </div>
    </div>
  );
};

export default ScrollDown;
