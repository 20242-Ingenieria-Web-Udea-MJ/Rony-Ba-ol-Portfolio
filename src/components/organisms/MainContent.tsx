/* eslint-disable @typescript-eslint/no-unused-vars */
import { Divider } from "../atoms/Divider";

import { KnowledgeCard } from "../molecules/KnowledgeCard";
import { EducationCard } from "../molecules/EducationCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Footer } from "./Footer";
import { ProfileCard } from "../molecules/ProfileCard";
import { Title } from "../atoms/Title";
import {
  Projects,
  SkillData,
  Profile,
  ProfilePhone,
  NavLinks,
} from "@/constants";
import { Autoplay } from "swiper/modules";
import ProjectCard from "./ProjectCard";

export const MainContent = () => {
  //This variable contains the options for the carousel

  return (
    <div className=" flex flex-col items-center bg-slate-100 h-full">
      <div className="w-11/12 bg-slate-50 flex items-center h-fit mb-8">
        <ProfileCard />
      </div>
      <div className="mb-10">
        <Title text="Conocimiento" />
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center mb-10">
        <KnowledgeCard
          icon="/img/web-development.png"
          title="Desarrollo Full Stack"
          description="Experiencia en el desarrollo de aplicaciones web Full Satack con Frameworks como Next.js, Flask, Django, React, Express.js"
        />
        <KnowledgeCard
          icon="/img/coding.png"
          title="Cloud Services"
          description="Experiencia en servicios de plataformas Cloud como Microsoft Azure y AWS"
        />
        <KnowledgeCard
          icon="/img/developer.png"
          title="Startup Employee"
          description="Manejo de diversas tecnologias desde arquitectura de software hasta despliegue de servicios web para diversos tipos de lcientes"
        />
      </div>
      <div className="mb-10">
        <Title text="Experiencia Laboral" />
      </div>
      <div className="flex flex-col justify-center w-11/12 p-8 items-center mb-10  bg-slate-50">
        <EducationCard
          university="Pi-Transform"
          state="Desarrollador Full Stack"
          period="2024-En curso"
          career="Desarrollador Full Stack"
          description="Me desempeño desarrollando aplicaciones full stack según las necesidades específicas de los clientes, implementando modelos de LLC utilizados actualmente e incorporando automatización en procesos convencionales. Además, me encargo del despliegue y mantenimiento de las aplicaciones."
        />
      </div>
      <div className="mb-10">
        <Title text="Educación" />
      </div>
      <div className="flex flex-col justify-center w-11/12 p-8 items-center mb-10  bg-slate-50">
        <EducationCard
          university="Universidad De Antioquia"
          state="Estudiante"
          period="2015-2021"
          career="Ingeniería Química"
          description="Enfoque en el diseño integral de procesos y productos,
                con una orientación práctica hacia la implementación de
                diseños experimentales en laboratorio, Buscando
                asegurar la viabilidad y escalabilidad de los diseños"
        />
        <Divider />

        <EducationCard
          university="Universidad De Antioquia"
          state="Estudiante"
          period="2021-En curso"
          career="Ingeniería De Sistemas"
          description="Mi formación incluye arquitectura segura, bases de datos,
                    desarrollo de aplicaciones con buenas prácticas y
                    patrones de diseño, aplicación de modelos de machine
                    learning, así como manejo de arquitectura de
                    computadores y sistemas operativos.
                    "
        />
      </div>

      <div className="mb-10">
        <Title text="Portafolio" />
      </div>

      <div
        // ref={proyectosRef}
        id="proyectosRef"
        className="flex flex-col items-center justify-center w-full ">
        {/* Este es el Swiper para Pc */}
        <div className="w-[80%] flex">
          <Swiper
            slidesPerView={2}
            centeredSlidesBounds={true}
            centeredSlides={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: false,
            }}
            speed={1500}
            pagination={{
              type: "progressbar",
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className=" mt-10 max-w-6xl
            ">
            {Projects.map((project, index) => (
              <SwiperSlide key={index} className="">
                <ProjectCard
                  key={index}
                  title={project.title}
                  text={project.text}
                  image={project.src}
                  link={project.link}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="flex w-11/12 items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};
