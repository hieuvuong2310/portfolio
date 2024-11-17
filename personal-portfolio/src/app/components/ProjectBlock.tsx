import React from "react";
import ProjectsLinkButton from "./ProjectsLinkButton";

function ProjectBlock({projectName, image, projectLink, description, techstacks}) {
    return (
        <div className="pt-10">
            <div className="flex items-center space-x-10">
                <div className="flex flex-col space-y-5">
                    <div>
                        <ProjectsLinkButton name={projectName} link={projectLink} />
                    </div>
                    <div className="text-[25px] font-accent">{description}</div>
                    <div className="flex space-x-4">
                        <div className="font-accent text-[20px]">Tech stacks:</div>
                        {techstacks.map((tech, index) => {
                            return (
                                <div key={index} className="text-[20px] font-accent bg-accent">{tech}</div>
                            )
                        })}
                    </div>
                </div>
                <img src={image} alt={projectName} className="w-[35%] h-[35%]"/>
            </div>
        </div>
    )
}

export default ProjectBlock;