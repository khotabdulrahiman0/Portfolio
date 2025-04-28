import React from 'react'

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-20 text-center space-y-6">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl text-cyan md:text-6xl font-bold text-gray-100">
        My <span className="text-cyan">Skills</span>
      </h2>
      <div className="w-20 h-1 bg-cyan-400 rounded-full"></div>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
        I excel in leveraging modern technologies to craft high-quality, impactful solutions. With a focus on best practices, my skill set empowers me to deliver real-world projects that make a difference. I am committed to continuous growth as a developer.
      </p>
    </div>
  )
}

export default SkillsText