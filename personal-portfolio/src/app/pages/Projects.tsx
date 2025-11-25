"use client";
import React from 'react';
import ProjectsLinkButton from '../components/ProjectsLinkButton';
import ProjectBlock from '../components/ProjectBlock';
import getProjects from '../server/src/helper/getProjects';
import Github from '../img/white-github.png';
import { CONTACT_INFO } from '../constants/config';

function Projects() {
    const projects = getProjects();
    return (
        <section 
            className='px-4 md:px-10 lg:px-20 py-16 md:py-20'
            aria-label="Projects section"
        >
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-primary text-primary text-stroke-3 text-stroke-black mb-12 md:mb-16">
                Projects
            </h2>
            <div className="space-y-12 md:space-y-16">
                {projects.map((project, index) => {
                    return (
                        <ProjectBlock 
                            key={index}
                            projectName={project.projectName} 
                            image={project.image} 
                            projectLink={project.projectLink} 
                            description={project.description} 
                            techstacks={project.techstacks} 
                        />
                    );
                })}
                <div className="pt-8">
                    <ProjectsLinkButton 
                        name="More projects" 
                        link={CONTACT_INFO.github}
                        className='bg-black text-white'
                        gitHub={Github}
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;