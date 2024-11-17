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

function ProjectsLinkButton({name, link, className="bg-accent text-black", gitHub=Github}: ProjectsLinkButtonProps) {
    return (
        <div>
            <button className={`w-[30%] h-[40px] ${className} rounded-[20px]`}>
                <div className="flex item-center justify-center">
                        <Link href={link} className={`${className} text-2xl font-accent underline`} target="_blank">
                            {name}
                        </Link>
                    <div className="position-absolute">
                        <Image src={gitHub} alt="github" width={28} height={28}/>
                    </div>
                </div>
                
            </button>
            
        </div>
    )
}

export default ProjectsLinkButton;