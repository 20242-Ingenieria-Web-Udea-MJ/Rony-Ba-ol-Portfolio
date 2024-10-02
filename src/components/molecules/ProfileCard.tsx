import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";

//This component is responsible for rendering the profile card that is displayed
//in the about me section
export const ProfileCard = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col space-y-3 w-4/6 p-8">
        <div className="flex  space-y-1">
          <p>
            <span className="text-4xl font-semibold ">
              Rony Santiago Bañol Rico
            </span>
            <br></br>
            <span className="text-4xl font-semibold text-purple-600 ">
              Ingeniero De Sistemas
            </span>
          </p>
        </div>
        <div>
          <span className="text-sm">
            Ingeniero de sistemas con sólida formación en Desarrollo Full Stack
            y ciberseguridad. Especializado en la creación de aplicaciones web
            responsivas con implementación de APIs RESTful, priorizando la
            integridad y seguridad en todas las etapas de desarrollo. Capacidad
            para resolver problemas de manera creativa y adaptarse rápidamente a
            diversos entornos tecnológicos. Proactivo y con un fuerte deseo de
            crecimiento en el campo del desarrollo y ciberseguridad.
          </span>
        </div>

        <Link
          href={"https://portfolio-rony-banol.vercel.app/"}
          className="bg-purple-400 rounded-lg flex items-center p-2 hover:bg-purple-500 w-fit">
          <div className="flex items-center justify-between">
            <span className="font-semibold me-2">Ver más</span>
            <AiOutlineArrowRight className="text-black" />
          </div>
        </Link>
      </div>
    </div>
  );
};
