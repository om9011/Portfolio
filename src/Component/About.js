import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const About = () => {
  return (
    <section className="bg-primary h-95vh flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* First Column */}
        <div>
          <h5 className="text-3xl text-secondary">I'm</h5>
          <h2 className="text-8xl text-primary font-semibold mb-2">OM GORE</h2>
          <div className='bg-tertiary h-1 w-60 mb-10' />
          <p className="text-lg text-secondary">
            I am a passionate student at Vishwakarma Institute of Technology, Pune, pursuing a Bachelor of Technology in Artificial Intelligence and Data Science. I have a strong foundation in programming languages like Java, Python, and C, along with web development skills in HTML, CSS, and JavaScript. I am enthusiastic about exploring new technologies and solving real-world problems through innovative solutions.
          </p>
        </div>

        {/* Second Column */}
        <div className="bg-secondary p-4 rounded-md">
          <div className="bg-secondary p-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-2">Services<div className='bg-tertiary h-0.5 w-24 mb-6' /></h2>

            <p className="text-lg text-secondary">
              <span className='text-primary'>Web Development</span> - Creating websites and web applications using modern technologies. <br /> <span className='text-primary'>Data Analysis</span> - Extracting insights and patterns from data to drive informed decision-making.<br /> <span className='text-primary'>Machine Learning</span> - Building predictive models and algorithms to enable machines to learn and make decisions based on data.
            </p>
          </div>
          <div className='bg-tertiary h-1 m-4' />


          <div className="flex space-x-4 items-center justify-center">
            <a href="https://www.linkedin.com/in/om-gore-5783a522a/" className="text-lg rounded-full border-2 border-tertiary text-tertiary p-1 hover:bg-black">
              <FaInstagram className='h-6 w-6 m-1 text-tertiary' />
            </a>
            <a href="https://www.linkedin.com/in/om-gore-5783a522a/" className="text-lg rounded-full border-2 border-tertiary text-tertiary p-1 hover:bg-black">
              <FaLinkedin className="h-6 w-6 m-1 text-tertiary" />
            </a>
            <a href="https://github.com/om9011" className="text-lg rounded-full border-2 border-tertiary text-tertiary p-1 hover:bg-black">
              <FaGithub className="h-6 w-6 m-1 text-tertiary" />
            </a>
            <a href="mailto:omgore4307@gmail.com" className="text-lg rounded-full border-2 border-tertiary text-tertiary p-1 hover:bg-black">
              <FaMailBulk className="h-6 w-6 m-1 " />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
