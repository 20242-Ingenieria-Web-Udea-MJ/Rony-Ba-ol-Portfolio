"use client";
import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
// import Transition from "./Transition";

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath] = useState("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  return (
    <div
      style={{ left: "20%" }}
      className=" lg:hidden    flex  absolute z-[50] -bottom-20 w-[50%] md:w-[50%] max-h-[250px] rounded-full justify-between items-center border bg-black border-white px-4 py-7 pl-5">
      {isRouting}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className="mb-16 pl-4 min-w-[20%] ">
          <nav.icon
            className={`w-[24px] h-[24px] ${
              path === nav.name ? "text-purple-800" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
