import React from "react";
import Link from "next/link";
import Github from "../img/github.png";
import Image, { StaticImageData } from "next/image";

interface ProjectsLinkButtonProps {
    name: string;
    link: string;
    className?: string;
    gitHub?: StaticImageData;
}

function ProjectsLinkButton({
    name, 
    link, 
    className = "bg-accent text-black", 
    gitHub = Github
}: ProjectsLinkButtonProps) {
    return (
        <Link 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-3 px-6 py-3 ${className} rounded-full font-accent text-lg md:text-xl transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                className.includes('bg-black') ? 'focus:ring-white' : 'focus:ring-accent'
            }`}
            aria-label={`View ${name} project`}
        >
            <span className="underline">{name}</span>
            <Image 
                src={gitHub} 
                alt="GitHub icon" 
                width={24} 
                height={24}
                className="w-6 h-6"
            />
        </Link>
    );
}

export default ProjectsLinkButton;