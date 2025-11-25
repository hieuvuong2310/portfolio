import React from "react";
import ProjectsLinkButton from "./ProjectsLinkButton";
import Image from "next/image";

interface ProjectBlockProps {
    projectName: string;
    image: string;
    projectLink: string;
    description: string;
    techstacks: string[];
}

function ProjectBlock({projectName, image, projectLink, description, techstacks}: ProjectBlockProps) {
    return (
        <article className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            <div className="flex-1 space-y-4 md:space-y-6">
                <div>
                    <ProjectsLinkButton name={projectName} link={projectLink} />
                </div>
                <p className="text-lg md:text-xl lg:text-2xl font-accent leading-relaxed">
                    {description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                    <span className="font-accent text-base md:text-lg font-semibold">Tech stacks:</span>
                    {techstacks.map((tech, index) => {
                        return (
                            <span 
                                key={index} 
                                className="text-sm md:text-base font-accent bg-accent px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        );
                    })}
                </div>
            </div>
            <div className="flex-shrink-0 w-full lg:w-[35%] h-48 lg:h-auto relative rounded-lg overflow-hidden shadow-md">
                <Image 
                    src={image} 
                    alt={`${projectName} project screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 35vw"
                />
            </div>
        </article>
    );
}

export default ProjectBlock;