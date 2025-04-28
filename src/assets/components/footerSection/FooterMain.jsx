import React from 'react';
import { Link } from 'react-scroll';

const FooterMain = () => {
  const links = [
    { link: 'About Me', section: 'aboutme' },
    { link: 'Skills', section: 'skills' },
    { link: 'Projects', section: 'projects' },
    { link: 'Contact', section: 'contact' },
  ];

  return (
    <footer className="px-4 bg-gray-900 text-lightGrey pt-12 pb-6">
      {/* Divider */}
      <div className="w-full h-[1px] bg-lightGrey"></div>

      {/* Footer Content */}
      <div className="md:flex sm:hidden justify-between items-center mt-6 max-w-[1200px] mx-auto">
        {/* Name */}
        <p className="text-2xl text-lightGrey font-bold">Abdul Rahiman Khot</p>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-lightGrey text-lg">
          {links.map((item, index) => (
            <li key={index}>
              <Link
                to={item.section}
                smooth={true}
                duration={500}
                className="hover:text-white transition-all duration-300 cursor-pointer"
              >
                {item.link}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <p className="text-center mt-4 text-sm text-lightBrown">
        ©2025 Abdul Rahiman | All Rights Reserved.
      </p>
    </footer>
  );
};

export default FooterMain;