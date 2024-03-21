// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const email = 'omgore4307@gmail.com'; // Replace with your Gmail
  const github = 'https://github.com/om9011'; // Replace with your GitHub profile URL
  const linkedin = 'https://www.linkedin.com/in/om-gore-5783a522a/'; // Replace with your LinkedIn profile URL

  return (
    <footer className="bg-secondary text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          Om Gore Portfolio &copy; {new Date().getFullYear()} | All rights reserved
        </p>
        <p className="text-sm mt-2">
          Built with React and Tailwind CSS
        </p>
        <div className="mt-4 flex justify-center">
          <a href={`mailto:${email}`} className="mx-2 text-gray-400 hover:text-white transition duration-300">
            <i className="bx bxs-envelope"></i>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white transition duration-300">
            <i className="bx bxl-github"></i>
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mx-2 text-gray-400 hover:text-white transition duration-300">
            <i className="bx bxl-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
