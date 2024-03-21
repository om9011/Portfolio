// src/components/Education.js
import React from 'react';
import EducationEntry from './EducationEntry';

const Education = () => {


  return (
    <section className="bg-secondary p-8">
      <h2 className="text-6xl font-semibold my-10  mx-80 text-center relative bg-primary text-tertiary py-2 skills z-10">
        Education
      </h2>
 
        <div>
        <EducationEntry
          title="Bachelor of Technology (B.Tech)"
          specialization="Artificial Intelligence and Data Science"
          institution="Vishwakarma Institute of Technology"
          grade="CGPA: 8.9"
        /></div>
        <div>
        <EducationEntry
          title="12th (HSC)"
          specialization="Maharashtra Board"
          institution="Laxmanrao Apte Prashala & Jr. College"
          grade="Percentage: 90%"
        /></div>
        <div>
        <EducationEntry
          title="10th (SSC)"
          specialization="Maharashtra Board"
          institution="Vishwakarma Vidyalaya, Pune."
          grade="Percentage: 88.80%"
        /></div>
    </section>
  );
};

export default Education;
