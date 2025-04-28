import React from 'react';

const ProjectText = () => {
  return (
    <div className="flex flex-col items-center text-center">
      
      <h2 className="text-4xl md:text-5xl font-bold  text-white">
        Featured Projects
      </h2>
      <div className="h-1 w-20 bg-[#e6e6e6] rounded-full mb-8"></div>
      <p className="text-lg text-[#e6e6e6] max-w-2xl">
        As a fresher, I've developed these projects to demonstrate my technical abilities 
        and problem-solving skills. Each one represents a different challenge overcome.
      </p>
    </div>
  );
};

export default ProjectText;
