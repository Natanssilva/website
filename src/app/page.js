import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, Github, LinkedinIcon, Mail } from "lucide-react";
import ScrollDown from "@/components/ScrollDown";
import Image from "next/image";
import TechStack from "@/components/TechStack";
import ProjectSlider from "@/components/ProjectSlider";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* Seção de Introdução */}
      <div
        id="home"
        className="min-h-screen flex justify-center items-center flex-col p-2 w-full"
      >
        <h1 className="text-4xl md:text-3xl sm:text-2xl text-center font-bold">
          Olá, eu me chamo Natan &#128075;
        </h1>
        <div className="flex flex-col flex-wrap justify-center items-center p-4">
          <div className="p-2">
            <p className="typing-demo text-center text-4xl sm:text-3xl md:text-4xl">
              Sou Desenvolvedor Web.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <p className="text-center whitespace-normal w-80 text-1xl text-gray-700">
              Graduando em Sistemas para Internet na Universidade do Vale do
              Itajaí, acredito no poder da tecnologia para transformar ideias
              simples em ferramentas incríveis. Cada ideia um código e cada
              código uma inovação!
            </p>
          </div>
        </div>
        <span className="typed-text text-teal-500"></span>
        <div className="p-3">
          <Dialog modal={false}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-60 border-2 border-gray-800 px-4 py-2 rounded-full text-gray-800 cursor-pointer gap-2 transform transition-transform hover:scale-105 hover:underline"
              >
                <Download size={18} color="currentColor" /> Ver Currículo
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-center p-2">
                  Selecione o idioma do currículo
                </DialogTitle>
                <div className="flex flex-col justify-center items-center gap-4">
                  <Button
                    variant="outline"
                    className="w-60 border-2 border-gray-800 px-4 py-2 rounded-full text-gray-800 cursor-pointer gap-2 transform transition-transform hover:scale-105 hover:underline"
                  >
                    <Download size={18} color="currentColor" /> Inglês
                  </Button>
                  <Button
                    variant="outline"
                    className="w-60 border-2 border-gray-800 px-4 py-2 rounded-full text-gray-800 cursor-pointer gap-2 transform transition-transform hover:scale-105 hover:underline"
                  >
                    <Download size={18} color="currentColor" /> Português
                  </Button>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        {/* Texto de rolagem */}
        <ScrollDown />
      </div>

      {/* Sobre mim*/}
      <div
        id="about"
        className="flex justify-center items-center p-4 min-h-screen"
      >
        {/* Sessao informações */}
        <section className="flex flex-col justify-center items-center space-y-6 gap-3">
          <h2 className="text-4xl md:text-3xl sm:text-2xl text-center font-bold">
            Natan Porto Machado da Silva
          </h2>
          <h3 className="text-2xl text-center text-gray-700">
            Desenvolvedor Web Full-Stack
          </h3>

          <div className="relative w-56 h-56 rounded-full overflow-hidden">
            <Image
              src="/perfil-pic.jpg"
              alt="profile"
              width={25}
              height={25}
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <p className="text-center p-5 whitespace-normal sm:w-full md:w-96 text-xl text-gray-700">
            Com cerca de 2 anos de experiência em desenvolvimento, utilizo minha
            criatividade e dedicação para criar soluções inovadoras que
            simplificam e resolvem desafios do dia a dia.
          </p>
          <div className="gap-5">
            <div className="p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                Atualmente
              </h3>
              <ul className="space-y-3 text-gray-600 p-2 ">
                <li className="flex items-center gap-2 ">
                  <span className="text-lg">🎓</span>
                  <span className="hover:text-blue-600 transition-colors">
                    Finalizando graduação em Sistemas Para Internet na{" "}
                    <span className="hover:underline cursor-pointer">
                      <a
                        href="https://portal.univali.br/Paginas/default.aspx"
                        target="_blank"
                      >
                        UNIVALI.
                      </a>
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">💻</span>
                  <span className="hover:text-blue-600 transition-colors">
                    Trabalhando como Desenvolvedor Web Jr.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">🚀</span>
                  <span className="hover:text-blue-600 transition-colors">
                    Construindo plataforma Fullstack para gerenciamento de
                    tarefas e organização.
                  </span>
                </li>
              </ul>
            </div>
            <p className="text-center p-4 whitespace-normal sm:w-full md:w-3xl text-xl text-gray-700">
              Minha jornada na área de tecnologia começou ainda criança,
              mostrando facilidade e gosto por computadores, desde muito novo
              tive gosto por aprender coisas novas e seguir uma carreira em
              tecnologia. Meus estudos de fato começaram em 2022 quando iniciei
              o curso de Ciência da Computação, onde logo em seguida comecei a
              estudar algoritmos e lógica de programação. Em 2023 me encontrei
              no meu curso atual, onde consegui alinhar meus conhecimentos e
              expectativas, no qual tive as minhas primeiras oportunidades no
              mercado de trabalho!
            </p>
            <p className="text-center p-2 whitespace-normal sm:w-full md:w-3xl text-xl text-gray-700">
              Estou muito feliz que você leu até aqui! Sinta-se à vontade para
              explorar meu portfólio e, se quiser trocar ideias ou falar sobre
              projetos, será um prazer conversar com você.
            </p>
          </div>

          <div className="flex justify-center gap-4 p-2">
            <a href="https://github.com/Natanssilva" target="_blank">
              <Github className="hover:scale-[1.05] cursor-pointer"></Github>
            </a>
            <a href="https://www.linkedin.com/in/natanssilva/" target="_blank">
              <LinkedinIcon className="hover:scale-[1.05] cursor-pointer"></LinkedinIcon>
            </a>
            <a href="mailto:natanportoms@outlook.com?subject=Gostaria de conversar para criar projetos!">
              <Mail className="hover:scale-[1.05] cursor-pointer"></Mail>
            </a>
          </div>
        </section>
      </div>

      {/* Tecnologia*/}
      <div
        id="tech"
        className="flex justify-center items-center p-4 min-h-screen"
      >
        <section className="flex flex-col justify-center items-center space-y-6 gap-3">
          <h2 className="text-4xl md:text-3xl sm:text-2xl text-center font-bold">
            Tech Stack
          </h2>
          <p className="text-center p-5 whitespace-normal  text-gray-700">
            Explorando as tecnologias e serviços que impulsionam minhas soluções
          </p>

          <TechStack />
        </section>
      </div>

      {/* Projetos*/}
      <div
        id="projects"
        className="flex justify-center items-center p-4 max-h-screen"
      >
        <section className="flex flex-col justify-center items-center space-y-6 gap-3">
          <h2 className="text-4xl md:text-3xl sm:text-2xl text-center font-bold">
            Projetos
          </h2>
          <p className="text-center p-5 whitespace-normal  text-gray-700">
            Explore alguns de meus projetos pessoais e tópicos de estudos.
          </p>

          <ProjectSlider />
        </section>
      </div>
    </div>
  );
}
