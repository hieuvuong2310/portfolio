"use client";
import React, { useState } from 'react';
import getSkills from "../server/src/helper/getSkills";
import { SkillsType } from '../server/src/helper/getSkills';
import Image from 'next/image';

function Skills() {
    const [hoveredLogo, setHoveredLogo] = useState("");

    const skills: SkillsType = getSkills();
    const logos: string[] = ["python", "java", "groovy", "javascript", 
                "typescript", "swift", "react", "vue", 
                "docker", "jenkins", "graphql", "restapi", 
                "firebase", "mongodb", "github", "node"];
    
    const formatSkillName = (name: string): string => {
        return name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1');
    };
    
    return (
        <section 
            className='px-4 md:px-10 lg:px-20 py-16 md:py-20'
            aria-label="Skills section"
        >
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-primary text-primary text-stroke-3 text-stroke-black mb-12 md:mb-16">
                Skills
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 justify-center items-center gap-8 md:gap-12">
                {
                    logos.map((logo, index) => {
                        const skillUrl = skills[logo];
                        if (!skillUrl) return null;
                        
                        return (
                            <div
                                key={index}
                                className="relative flex flex-col justify-center items-center group"
                                onMouseEnter={() => setHoveredLogo(logo)}
                                onMouseLeave={() => setHoveredLogo("")}
                                role="img"
                                aria-label={`${formatSkillName(logo)} skill`}
                            >
                                <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform duration-200 group-hover:scale-110">
                                    <Image 
                                        src={skillUrl} 
                                        alt={`${formatSkillName(logo)} logo`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                                    />
                                </div>
                                {hoveredLogo === logo && (
                                    <div className="absolute font-accent bottom-0 mb-[-30px] text-sm md:text-base text-white bg-black bg-opacity-90 px-3 py-1.5 rounded-md whitespace-nowrap z-10 shadow-lg">
                                        {formatSkillName(logo)}
                                    </div>
                                )}
                            </div>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Skills;