import React from "react";
import { Photo } from "../atoms/Photo";
import { ProgressBar } from "../molecules/ProgressBar";
import { Divider } from "../atoms/Divider";
import { ItemSkill } from "../atoms/ItemSkill";
import { SubTitle } from "../atoms/SubTitle";

export const SideBar = () => {
  return (
    <div className=" w-80 flex sticky top-0 h-screen overflow-y-auto overflow-x-hidden">
      <div className="flex w-full h-fit justify-center m-3 p-10  ">
        <div className=" flex flex-col w-full items-center">
          <div className="flex flex-col space-y-2 mb-8 text-center w-full">
            <div className="flex justify-center">
              <Photo styles="w-24 rounded-full" />
            </div>
            <span className="text-2xl font-semibold text-center">
              Rony Santiago Bañol
            </span>
            <span className="text-xs">Ingeniero De Sistemas</span>
          </div>

          <Divider />
          <div className="flex flex-col w-full space-y-3">
            <SubTitle text="Idiomas" />
            <ProgressBar language="Español" percentage={100} />
            <ProgressBar language="Inglés" percentage={90} />
          </div>
          <Divider />
          <div className="flex flex-col w-full space-y-3">
            <SubTitle text="Lenguajes de programación" />
            <ProgressBar language="Python" percentage={80} />
            <ProgressBar language="JavaScript" percentage={80} />
            <ProgressBar language="TypeScript" percentage={60} />
          </div>
          <div className="flex flex-col w-full space-y-3 mt-5">
            <SubTitle text="Servicios en la nube" />
            <ProgressBar language="Azure" percentage={95} />
            <ProgressBar language="AWS" percentage={20} />
          </div>
          <Divider />
          <div className="flex flex-col w-full space-y-3">
            <SubTitle text="Habilidades" />
            <ItemSkill text="Liderazgo" />
            <ItemSkill text="Creatividad" />
            <ItemSkill text="Investigación" />
          </div>
          <Divider />
        </div>
      </div>
    </div>
  );
};
