// src/components/Project.js
import React from 'react';
import ProjectEntry from './ProjectEntry';
import { FaArrowRight } from 'react-icons/fa';

const Project = () => {
    return (
        <section className="bg-secondary p-8">
            <h2 className="text-6xl font-semibold my-10  mx-80 text-center relative bg-primary text-tertiary py-2 skills z-10">
                Project
            </h2>
            <div className="grid grid-cols-1 gap-6">
                <ProjectEntry
                    title="Jana-गणना | Smart Census System"
                    description="Android Application + Web Application. Census Based on Unique Identification numbers."
                    stack="Java, Python, ReactJS, NodeJS, MongoDB"
                    githubLink="https://github.com/om9011"
                />
                <ProjectEntry
                    title="DubWiz | Video-Dubbing Website"
                    description="Web Application + Machine Learning. Video Dubbing web to Convert English to 5 Language."
                    stack="ReactJS, Python-Flask, MongoDB"
                    githubLink="https://github.com/om9011"
                />
                <ProjectEntry
                    title="‘Swa’ - Roopwardhinee | Admin-Student Portal"
                    description="Web Application. Academic Portal for Students + Teacher for branch of ‘Swa’ - Roopwardhinee."
                    stack="ReactJS, NodeJS, ExpressJS, MongoDB"
                    githubLink="https://github.com/om9011"
                />


                <a href="https://github.com/om9011" target="_blank" rel="noopener noreferrer" className="text-lg mx-auto text-tertiary text-center">
                    <button className=' border-b-2 flex justify-center  items-center gap-8'>GitHub Profile <FaArrowRight />
                    </button></a>

            </div>
        </section>
    );
};

export default Project;
