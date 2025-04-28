import React from 'react';
import { PiHexagonThin } from "react-icons/pi";
import { fadeIn } from '../../../framerMotion/variants';
import { motion } from 'framer-motion';

const HeroPic = () => {
  return (
    <motion.div  
      variants={fadeIn('left', 0.2)} 
      initial='hidden' 
      whileInView='show' 
      viewport={{once: false, amount: 0}} 
      className="relative h-full flex items-center justify-center"
    >
      {/* Hexagon container - ensures correct alignment */}
      <div className="relative w-[650px] h-[600px] flex items-center justify-center">
        {/* Centered Hexagon - improved positioning */}
        <div className="absolute inset-0 flex items-center justify-center">
          <PiHexagonThin 
            className="w-full h-full text-cyan blur-md animate-[spin_20s_linear_infinite]"
          />
        </div>
        
        {/* Image with perfect center alignment */}
        <div className="relative z-10 flex items-center justify-center">
          <img 
            src="/images/HexaPic.png" 
            alt="Abdul Rahiman Khot" 
            className="w-[480px] h-[480px] object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default HeroPic;