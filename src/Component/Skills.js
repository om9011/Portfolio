import React from 'react';

const Skills = () => {
  return (
    <section className="p-4 bg-primary overflow-x-hidden">


      <h2 className="text-6xl font-semibold my-10  mx-80 text-center relative bg-secondary text-tertiary py-2 skills z-10">
        Skills
      </h2>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkillCategory title="Programming Skills" skills={['Java', 'Python', 'C', 'SQL']} />
        <SkillCategory title="Development Skills" skills={['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'MongoDB']} />
        <SkillCategory title="Other Skills" skills={['Git', 'GitHub', 'Canva']} />
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-primary shadow-md p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <ul className="list-disc ml-6 ">
        {skills.map((skill, index) => (
          <li key={index} className="text-base text-tertiary text-center border-2 my-5 py-1 list-none transition duration-300 ease-in-out hover:bg-gray-100 hover:shadow-md hover:text-gray-900 rounded-md px-2 cursor-pointer">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
