import React from 'react';
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a 
      href="/Resume.pdf" 
      download 
      className="px-4 py-2 rounded-full text-2xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow"
    >
      Resume      <div className="sm:hidden md:block">
        <LuArrowDownRight /> 
      </div>
    </a>
  );
};

export default NavbarBtn;
