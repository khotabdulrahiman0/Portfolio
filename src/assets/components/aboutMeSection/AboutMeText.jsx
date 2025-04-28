import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <div className="prose prose-lg prose-invert max-w-none mb-8">
        <p className="text-slate-300 leading-relaxed text-white">
          I'm <span className="text-cyan-400 font-medium">Abdul Rahiman</span>, a passionate web developer with a strong foundation
          in the MERN stack. I enjoy building modern, responsive web applications
          and constantly push myself to improve both frontend and backend skills.
        </p>
        
        <p className="text-slate-400 leading-relaxed text-white">
          I specialize in React and Node.js, and I love experimenting with UI
          design and real-world functionality. I'm currently focused on creating
          projects that showcase my skills — including eCommerce platforms, food
          delivery systems, and real-time chat apps.
        </p>
        
        <p className="text-slate-400 leading-relaxed text-white">
          I'm also exploring mobile app development and planning to expand my portfolio 
          to land exciting job opportunities in the tech field. Outside of coding, I'm always learning
          — whether it's exploring new technologies like Docker and cloud
          computing, or helping friends with their projects.
        </p>
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
        My Projects
        </button>
      </div>
    </div>
  );
};

export default AboutMeText;
