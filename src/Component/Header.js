import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="text-white bg-primary px-20 py-10 flex justify-between items-center">
      <nav className='w-full flex justify-between items-center'>
      <div>
        <h1 className="text-2xl font-semibold">OM GORE</h1>
      </div>
      
        <ul className="flex space-x-8 gap ">
          <li>
            <a href="#home" className="text-lg py-2">Home</a>
          </li>
          <li>
            <a href="#Skills" className="text-lg py-2">Skills</a>
          </li>
          <li>
            <a href="#Projects" className="text-lg py-2">Projects</a>
          </li>
          <li>
            <a href="#Contact" className="text-lg py-2">Contact</a>
          </li>

          </ul>
          <ul className="flex space-x-14 gap no-underline">
          <li>
            <a href="https://github.com/om9011" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg gap-2">
              <FaGithub className="h-6 w-6 mr-1" />
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/om-gore-5783a522a/" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg gap-2">
              <FaLinkedin className="h-6 w-6 mr-1" />
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
