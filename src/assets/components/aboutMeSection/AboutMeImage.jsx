
// AboutMeImage.jsx
import React from 'react'

const AboutMeImage = () => {
  return (
    <div className="relative md:w-2/5 w-full max-w-sm">
      {/* Main image container with shadow */}
      <div className="relative h-[500px] w-[300px] mx-auto">
        {/* Decorative elements */}
        <div className="absolute top-8 -right-8 w-24 h-24 border-4 border-cyan-500/30 rounded-full"></div>
        <div className="absolute -bottom-6 -left-6 w-16 h-16 border-4 border-orange-500/30 rounded-full"></div>
        
        {/* Image frame */}
        <div className="absolute inset-0 rounded-[40px] overflow-hidden shadow-2xl shadow-cyan-900/20 border border-slate-700/50">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-orange-500/10 z-10"></div>
          
          {/* The image */}
          <div className="h-full w-full overflow-hidden">
            <img 
              src="../../images/about-me.jpg" 
              alt="Abdul Rahiman" 
              className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeImage