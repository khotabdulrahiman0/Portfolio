import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { CgArrowTopRightO } from 'react-icons/cg';

const SingleProject = ({ project }) => {
  const { title, description, tech, imageUrl, liveLink, githubLink, index } = project;
  const isEven = index % 2 === 0;

  return (
    <div className="group rounded-xl overflow-hidden bg-[#2a211f] border border-[#3d2e2b] transition-all duration-300 shadow-xl">
      <div className={`flex flex-col lg:flex-row ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Container */}
        <div className="w-full lg:w-1/2 overflow-hidden relative">
          <img 
            src={imageUrl}
            alt={`${title} preview`}
            className="w-full h-64 lg:h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        {/* Content Container */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#3d2e2b] text-[#e6e6e6] mb-4">
              Featured Project
            </div>
            <h3 className="text-2xl font-bold text-orange mb-3">{title}</h3>
            <p className="text-[#e6e6e6] mb-6">{description}</p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tech.map((item, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-[#3d2e2b] text-[#e6e6e6] rounded-full text-sm font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-4">
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-[#e6e6e6] text-[#231815] rounded-lg hover:bg-white transition-colors"
            >
              <span>Live Demo</span>
              <CgArrowTopRightO className="text-lg" />
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-[#3d2e2b] text-[#e6e6e6] rounded-lg hover:bg-[#4d3e3b] transition-colors"
            >
              <FaGithub className="text-lg" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;