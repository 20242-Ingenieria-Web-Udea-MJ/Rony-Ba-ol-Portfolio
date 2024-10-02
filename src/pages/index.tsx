import { MainContent } from "@/components/organisms/MainContent";
import { SideBar } from "@/components/organisms/SideBar";

import React from "react";

const index = () => {
  return (
    <div className="relative h-full flex">
      {/* Sidebar a la izquierda */}
      <div className="w-80">
        <SideBar />
      </div>

      {/* Contenido principal en el centro */}
      <div className=" overflow-y-auto">
        <MainContent />
      </div>
    </div>
  );
};

export default index;
