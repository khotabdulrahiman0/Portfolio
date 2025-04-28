import React from 'react';
import ContactMeLeft from './ContactMeLeft';
import ContactMeRight from './ContactMeRight';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../framerMotion/variants'; // adjust path if needed

const ContactmeMain = () => {
  return (
    <section id="contact" className="py-24 ">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Heading */}
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-5xl md:text-6xl font-bold text-cyan text-center mb-16"
        >
          Contact Me
        </motion.h2>

        {/* Main Content */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="bg-gray-800 rounded-2xl shadow-2xl p-10 flex flex-col lg:flex-row gap-10"
        >
          {/* Left Part */}
          <motion.div
            variants={fadeIn('right', 0.5)}
            className="w-full lg:w-1/2"
          >
            <ContactMeLeft />
          </motion.div>

          {/* Right Part */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            className="w-full lg:w-1/2"
          >
            <ContactMeRight />
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
};

export default ContactmeMain;
