"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { Github, ArrowLeft, ArrowRight, MailOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Pokedex",
    description: "Aplicação que simula uma pokedex, que utiliza a API PokeApi.",
    image: "/pokedex-img.png",
    repoLink: "https://github.com/Natanssilva/Pokedex",
    tech: ["Javascript", "HTML", "CSS", "API"],
  },
  {
    title: "Threads",
    description:
      "Aplicação que simula a utilização de threads do processador utilizando NodeJS.",
    image: "/threads.jpeg",
    repoLink: "https://github.com/Natanssilva/Sistemas_operacionais/",
    tech: ["Node.JS"],
  },
  {
    title: "NewsPaper",
    description:
      "Aplicação Full-Stack no qual possui fluxo de usuários e noticias globais relacionado a Apple.",
    image: "/apple-notices.jpg",
    repoLink: "https://github.com/Natanssilva/newspaperProject",
    tech: [
      "Javascript",
      "HTML",
      "CSS",
      "API",
      "PHP",
      "MySQL"
    ],
  },
  {
    title: "Emporium",
    description: "Aplicação landing Page simulando loja de café.",
    image: "/coffee-pic.png",
    repoLink: "https://github.com/Natanssilva/EmporiumCoffee",
    tech: ["Javascript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Versionamento",
    description:
      "Repositório com estudos e comandos essenciais sobre versionamento de código.",
    image: "/git-github.png",
    repoLink: "https://github.com/Natanssilva/projetogit",
    tech: ["GIT"],
  },
  {
    title: "CountDown",
    description: "Aplicação que simula um countdown até 1 de Janeiro de 2030.",
    image: "/foguete.jpg",
    repoLink: "https://github.com/Natanssilva/Countdown",
    tech: ["Javascript", "HTML", "CSS"],
  },
];

export default function ProjectSlider() {
  return (
    <div className="flex justify-center items-center  w-full bg-gray-100 py-10">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 40 },
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        // pagination={{ clickable: true }}
        spaceBetween={20}
        className="w-[90vw] sm:w-[80vw] md:w-[70vw] lg:w-screen xl:w-[75vw] 2xl:w-[65vw] h-[500px] "
      >
        <button className="cursor-pointer custom-prev absolute left-2 top-1/2 translate-y-1/2 z-10  p-2 rounded-full shadow-md">
          <ArrowLeft size={24} color="black" />
        </button>
        <button className="cursor-pointer custom-next absolute right-2 top-1/2 translate-y-1/2 z-10  p-2 rounded-full shadow-md">
          <ArrowRight size={24} color="black" />
        </button>
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden  h-[450px] flex flex-col p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4 "
              />
              <h2 className="text-xl font-semibold mb-2 text-center">
                {project.title}
              </h2>
              <p className="text-gray-600 text-sm text-center mb-4">
                {project.description}
              </p>

              <div className="mt-auto flex justify-center flex-col items-center p-4">
                <Button
                  variant="outline"
                  className="cursor-pointer transition-transform duration-300 hover:scale-105"
                >
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Ver Repositório
                  </a>
                  <Github />
                </Button>
              </div>
              <div className="absolute bottom-1/6 flex justify-center flex-wrap items-center gap-2">
                <p className="text-sm text-gray-700">Tech:</p>
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="shadow-md rounded-md  p-1 text-sm text-gray-500 hover:underline cursor-pointer transition-colors"
                  >
                    {tech}
                  </span>
                ))}
                
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
