"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Pokedex",
    description: "Aplicação que simula uma pokedex, que utiliza a API PokeApi.",
    image: "/pokedex-img.png",
    repoLink: "https://github.com/Natanssilva/Pokedex",
  },
  {
    title: "Threads",
    description:
      "Aplicação que simula a utilização de threads do processador utilizando NodeJS.",
    image: "/threads.jpeg",
    repoLink: "https://github.com/Natanssilva/Sistemas_operacionais/",
  },
  {
    title: "NewsPaper",
    description:
      "Aplicação Full-Stack no qual possui fluxo de usuários e noticias globais relacionado a Apple.",
    image: "/apple-notices.jpg",
    repoLink: "https://github.com/Natanssilva/newspaperProject",
  },
  {
    title: "Emporium",
    description: "Aplicação landing Page simulando loja de café.",
    image: "/coffee-pic.png",
    repoLink: "https://github.com/Natanssilva/EmporiumCoffee",
  },
  {
    title: "Versionamento",
    description:
      "Repositório com estudos e comandos essenciais sobre versionamento de código.",
    image: "/git-github.png",
    repoLink: "https://github.com/Natanssilva/projetogit",
  },
  {
    title: "CountDown",
    description: "Aplicação que simula um countdown até 1 de Janeiro de 2030.",
    image: "/foguete.jpg",
    repoLink: "https://github.com/Natanssilva/Countdown",
  }
];

export default function ProjectSlider() {
  return (
    <div className="flex justify-center items-center h-[60vh]  bg-gray-100">
      <Swiper
        spaceBetween={20}
        pagination={{ clickable: true }}
        className="w-[82vw] h-[350px] " // Ajuste de largura e altura
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        loop={true}
        modules={[Pagination, Navigation]}
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            className="flex justify-center items-center shadow-lg p-8 rounded-lg"
          >
            <div className="text-center ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <div className="flex justify-evenly flex-wrap items-center gap-8">
                <h2 className="mt-2 p-2 text-lg font-semibold underline">
                  {project.title}
                </h2>

                <span className="flex justify-center gap-2">
                  <a
                    className="hover:underline"
                    href={project.repoLink}
                    target="_blank"
                  >
                    Repositório
                  </a>
                  <Github className="hover:scale-[1.05] cursor-pointer"></Github>
                </span>
              </div>
              <p className="text-sm p-3">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
