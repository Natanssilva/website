import { Separator } from "@/components/ui/separator";
import { Download, Github, LinkedinIcon, Mail } from "lucide-react";

export default function Footer() {
    let data = new Date;
    let year = data.getFullYear();

  return (
    <footer
      id="footer"
      className="bottom-0 w-full p-2 relative border-t border-gray-300 shadow-lg gap-6"
    >
      <div className="flex flex-col justify-around items-center w-full">
        <div className="flex  justify-center items-center  gap-4 p-2">
          <a className="flex justify-center items-center gap-2 " href="https://github.com/Natanssilva" target="_blank">
            <Github className="hover:scale-[1.05] cursor-pointer" ></Github>
          </a>
          <a className="flex justify-center items-center gap-2" href="https://www.linkedin.com/in/natanssilva/" target="_blank">
            <LinkedinIcon className="hover:scale-[1.05] cursor-pointer" ></LinkedinIcon>
          </a>
          <a className="flex justify-center items-center gap-2" href="mailto:natanportoms@outlook.com?subject=Gostaria de conversar para criar projetos!">
            <Mail className="hover:scale-[1.05] cursor-pointer" ></Mail>
          </a>
        </div>

        <div className="p-8">
          <p className="text-center text-sm text-zinc-400">
            © {year} Natan Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
