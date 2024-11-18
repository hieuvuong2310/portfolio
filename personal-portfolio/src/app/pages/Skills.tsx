"use client";
import React, { useState } from 'react';
import getSkills from "../server/src/helper/getSkills";

function Skills() {
    const [hoveredLogo, setHoveredLogo] = useState(null);

    const skills = getSkills();
    const logos = ["python", "java", "groovy", "javascript", 
                "typescript", "swift", "react", "vue", 
                "docker", "jenkins", "graphql", "restapi", 
                "firebase", "mongodb", "github", "node"]
    return (
        <div className='pl-10 pr-10 pb-10'>
            <div className="text-[100px] font-primary text-primary text-stroke-3 text-stroke-black">Skills</div>
            <div className="grid grid-cols-8 justify-center items-center gap-x-12 gap-y-10">
                {
                    logos.map((logo, index) => {
                        return (
                            <div
                                key={index}
                                className="relative flex flex-col justify-center items-center"
                                onMouseEnter={() => setHoveredLogo(logo)}
                                onMouseLeave={() => setHoveredLogo(null)}
                                >
                                <img src={skills[logo]} width={100} height={100} alt={logo} />
                                {hoveredLogo === logo && (
                                    <div className="absolute font-accent bottom-0 mb-2 text-white bg-black bg-opacity-75 px-2 py-1 rounded">
                                        {logo}
                                    </div>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;