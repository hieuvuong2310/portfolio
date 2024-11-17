"use client";
import React from 'react';
import ProjectsLinkButton from '../components/ProjectsLinkButton';
import ProjectBlock from '../components/ProjectBlock';
import getProjects from '../server/src/helper/getProjects';
import Github from '../img/white-github.png';

function Projects() {
    const projects = getProjects();
    return (
        <div className='pl-10 pr-10 pb-10'>
            <div className="text-[100px] font-primary text-primary text-stroke-3 text-stroke-black">Projects</div>
            {/* <ProjectsLinkButton name="Financial App" link="https://www.google.com"/> */}
            {projects.map((project, index) => {
                return (
                    <ProjectBlock 
                        key={index}
                        projectName={project.projectName} 
                        image={project.image} 
                        projectLink={project.projectLink} 
                        description={project.description} 
                        techstacks={project.techstacks} />
                );
            })}
            <ProjectsLinkButton 
                name="More projects" 
                link='https://github.com/hieuvuong2310'
                className='bg-black text-white'
                gitHub={Github}/>
        </div>
    )
}

export default Projects;