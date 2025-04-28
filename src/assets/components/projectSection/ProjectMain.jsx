// ProjectMain.jsx
import React from 'react';
import ProjectText from './ProjectText';
import SingleProject from './SingleProject';
import { motion } from 'framer-motion';
import { fadeIn } from '../../../framerMotion/variants'; // Assuming you have a fadeIn variant

const ProjectMain = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description:
        'A full-featured e-commerce platform built with the MERN stack. Features include user authentication, product filtering, cart functionality, payment integration, and responsive design.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux','Razorpay','Paypal'],
      imageUrl: '../../images/ecom.png',
      liveLink: 'https://armk-e-comm-fe.vercel.app/',
      githubLink: 'https://github.com/khotabdulrahiman0',
    },
    {
      title: 'Food Delivery Website',
      description:
        'An intuitive food delivery application with real-time order tracking, restaurant browsing, and secure checkout. Optimized for both mobile and desktop experiences.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB','Stripe'],
      imageUrl: '../../images/food.png',
      liveLink: 'https://armk-foods-frontend.onrender.com/',
      githubLink: 'https://github.com/khotabdulrahiman0',
    },
    {
      title: 'Real-time Chat Application',
      description:
        'A lightweight yet powerful chat platform supporting private messaging, group chats, and media sharing. Built with WebSockets for instantaneous communication.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      imageUrl: '../../images/chatme.jpg',
      liveLink: 'https://armk.com/chatter-box',
      githubLink: 'https://github.com/khotabdulrahiman0',
    },
  ];

  return (
    <div id="projects" className="bg-[#2c2523] py-24">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Animate Project Text */}
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <ProjectText />
        </motion.div>

        {/* Animate Projects */}
        <div className="mt-16 grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn('up', 0.3 + index * 0.2)} // Stagger animation
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <SingleProject project={{ ...project, index }} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectMain;
