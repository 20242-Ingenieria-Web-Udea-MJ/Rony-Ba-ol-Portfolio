// components/Footer.js

import React from "react";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-50 shadow-xl p-2 mt-10 w-full  flex rounded-sm">
      <div className="container mx-auto text-center flex items-center justify-between">
        <div className="mb-4 flex flex-col space-y-2">
          <h4 className="text-lg font-semibold">Contacto</h4>
          <div className="flex items-center space-x-4">
            <MdEmail className="text-2xl text-purple-500 rounded-full" />
            <span className="text-sm">ronysantiagoba@gmail.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneSquare className="text-2xl text-purple-500 rounded-full" />
            <span className="text-sm">+57 3024771393</span>
          </div>
        </div>
        <div className="mb-4 flex flex-col space-y-2">
          <h4 className="text-lg font-semibold"></h4>
          <div className="flex justify-center space-x-4">
            <Link href="https://github.com/Rony-San" target="_blank">
              <IoLogoGithub className="text-4xl text-purple-500 hover:text-purple-600" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rony-santiago/"
              target="_blank">
              <FaLinkedin className="text-4xl text-purple-500 rounded-full hover:text-purple-600" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
