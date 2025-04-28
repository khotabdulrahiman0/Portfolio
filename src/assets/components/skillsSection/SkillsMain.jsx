// SkillsMain.jsx
import React from 'react';
import SkillsText from './SkillsText';
import AllSkills from './AllSkills';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../framerMotion/variants'; // Assuming you have a fadeIn function

const SkillsMain = () => {
  return (
    <div id="skills" className="relative py-24 bg-gradient-to-b from-[#0a192f] to-[#1c2b3a] text-gray-100">
      <div className="max-w-[1200px] px-4 mx-auto relative z-10 space-y-12">
        
        {/* Animate Skills Text */}
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <SkillsText />
        </motion.div>

        {/* Animate All Skills */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <AllSkills />
        </motion.div>

      </div>

      {/* Background Blur Effect */}
      <div className="absolute bottom-0 left-0 right-0 top-[40%] -z-10">
        <div className="bg-gradient-to-r from-cyan to-blue-500 h-[500px] w-[500px] rounded-full blur-[150px] opacity-10 mx-auto"></div>
      </div>

    </div>
  );
};

export default SkillsMain;
