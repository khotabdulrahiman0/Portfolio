import React from 'react'
import {Link} from 'react-scroll'

const NavbarLinks = () => {
    const links = [
        {link: "About Me", section: "aboutme" },
        {link: "Skills", section: "skills" },
        {link: "Projects", section: "projects" },
        {link: "Contact", section: "contact" },
    ]
  return (
    <ul className='flex gap-6 text-white font-bold text-center py-2 lg:flex-row sm-flex-clo lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 backdrop-blur-lg lg:bg-black sm:w-full '>

        {links.map((link,index)=>{
            return <li className='group' key={index}>
                <Link className='cursor-pointer text-white hover:text-cyan transition-all duration-500' to={link.section} smooth={true} spy={true} duration={500} offset={-130}>{link.link}</Link>
                <div className='mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500'></div>
            </li>
        })}
    </ul>
  )
}

export default NavbarLinks