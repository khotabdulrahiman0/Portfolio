import React from 'react';
import AboutMeText from './AboutMeText';
import AboutMeImage from './AboutMeImage';
import { fadeIn } from '../../../framerMotion/variants';
import { motion } from 'framer-motion';

const AboutMeMain = () => {
  return (
    <section id="aboutme" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background elements - kept simple */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-orange-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Text on left */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="w-full md:w-1/2 p-2"
          >
            <AboutMeText />
          </motion.div>

          {/* Image on right */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="w-full md:w-1/2 flex justify-center p-2"
          >
            <AboutMeImage />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeMain;