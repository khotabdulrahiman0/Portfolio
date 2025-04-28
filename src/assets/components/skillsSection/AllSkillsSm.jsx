import React from 'react'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython } from "react-icons/fa"
import { TbBrandRedux, TbBrandNextjs } from "react-icons/tb"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiExpress } from "react-icons/si"
import SingleSkill from './SingleSkill'

const AllSkills = () => {
  const skills = [
    { skill: "HTML", icon: FaHtml5 },
    { skill: "CSS", icon: FaCss3Alt },
    { skill: "JavaScript", icon: FaJsSquare },
    { skill: "ReactJs", icon: FaReact },
    { skill: "Redux", icon: TbBrandRedux },
    { skill: "NextJs", icon: TbBrandNextjs },
    { skill: "NodeJs", icon: FaNodeJs },
    { skill: "TailwindCSS", icon: RiTailwindCssFill },
    { skill: "Python", icon: FaPython },
    { skill: "ExpressJs", icon: SiExpress },
  ]

  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12 '>
      {skills.map((item, index) => (
        <SingleSkill key={index} text={item.skill} imgSvg={<item.icon />} />
      ))}
    </div>
  )
}

export default AllSkills