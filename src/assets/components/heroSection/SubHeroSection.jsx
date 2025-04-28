import React from 'react'
import { motion } from 'framer-motion'

const SubHeroSection = () => {
  const skills = [
    { 
      text: "Fast Learner", 
      icon: "⚡", 
      description: "Quickly adapts to new technologies and concepts"
    },
    { 
      text: "Team Work", 
      icon: "🤝", 
      description: "Collaborates effectively in diverse environments"
    },
    { 
      text: "Details Master", 
      icon: "💎", 
      description: "Meticulous attention to quality and precision"
    }
  ]
  
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }
  
  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.2, 
      scale: 1,
      transition: {
        yoyo: Infinity,
        duration: 2
      }
    }
  }
  
  return (
    <div className="relative w-full py-12 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 overflow-hidden">
      {/* Background Elements - Now with animation */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          initial={{ x: -50, opacity: 0.1 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl"
        />
        <motion.div 
          initial={{ x: 50, opacity: 0.1 }}
          animate={{ x: 0, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl"
        />
      </div>
      
      {/* Top Divider with animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />
      
      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col md:flex-row justify-around items-stretch gap-6 md:gap-8 relative z-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 h-full
                transform transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10
                overflow-hidden group-hover:border-cyan-400/40">
                {/* Glowing corner accent with animation */}
                <motion.div 
                  variants={glowVariants}
                  className="absolute -top-10 -left-10 w-20 h-20 bg-cyan-500/20 rounded-full filter blur-xl"
                />
                
                <div className="flex flex-col items-center text-center">
                  <motion.span 
                    whileHover={{ scale: 1.3, color: "#22d3ee" }}
                    className="text-4xl mb-4 transition-all duration-500"
                  >
                    {skill.icon}
                  </motion.span>
                  
                  <motion.h3 
                    whileHover={{ scale: 1.05 }}
                    className="text-cyan-300 font-bold uppercase tracking-wider mb-3 
                    text-xl md:text-2xl xl:text-3xl transition-colors duration-500 
                    group-hover:text-white"
                  >
                    {skill.text}
                  </motion.h3>
                  
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: "auto" }}
                    className="text-slate-400 text-sm font-light mt-0 group-hover:mt-2
                    group-hover:text-white overflow-hidden"
                  >
                    {skill.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Divider with animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
      />
    </div>
  )
}

export default SubHeroSection