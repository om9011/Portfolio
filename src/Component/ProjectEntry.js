import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProjectEntry = ({ title, description, stack, githubLink }) => {
  return (
    <div className="border border-primary rounded-lg p-4 mx-4">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-lg text-secondary mb-2">{description}</p>
      <p className="text-lg text-secondary mb-2"><strong>Tech Stack:</strong> {stack}</p>
      <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-lg flex justify-start items-center gap-8 text-tertiary hover:underline">
        GitHub Link <FaArrowRight/>
      </a>
    </div>
  );
};

export default ProjectEntry;
