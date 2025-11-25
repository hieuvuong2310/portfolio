"use client";
import React from 'react';
import getProfessionals from '../server/src/helper/getProfessionals';

function Professionals() {
    const timelineData = getProfessionals();
    
    function getItemColor(num: number): string {
        return num % 2 === 0 ? "bg-accent" : "bg-job";
    }
    
    return (
        <section 
            className='px-4 md:px-10 lg:px-20 py-16 md:py-20'
            aria-label="Professional experience section"
        >
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-primary text-primary text-stroke-3 text-stroke-black mb-12 md:mb-16">
                Experience
            </h2>
            <div className="relative py-10">
                <div className="grid grid-cols-1 md:grid-cols-9 gap-y-8 md:gap-y-10">
                    <div className="col-span-1 md:col-span-4 md:col-start-1 text-center text-2xl md:text-3xl lg:text-[45px] bg-accent py-3 px-4 rounded-lg">
                        Professional Career
                    </div>
                    <div className="col-span-1 md:col-span-4 md:col-start-6 text-center text-2xl md:text-3xl lg:text-[45px] bg-job py-3 px-4 rounded-lg">
                        Extra Curricular
                    </div>
                    {timelineData.map((item, index) => {
                        if (!item.company) return null;
                        
                        const isEven = index % 2 === 0;
                        const itemColor = getItemColor(index);
                        
                        return (
                            <div
                                key={index}
                                className={`relative z-10 flex flex-col items-center col-span-1 md:col-span-4 ${
                                    isEven ? "md:col-start-1" : "md:col-start-6"
                                }`}
                            >
                                <div
                                    className={`w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full text-white text-xl md:text-2xl ${itemColor} shadow-md`}
                                    role="img"
                                    aria-label={`${item.company} icon`}
                                >
                                    {item.icon}
                                </div>
                                <div className="flex flex-col items-center text-center mt-4 space-y-2">
                                    <time className="text-base md:text-lg font-bold font-accent" dateTime={item.time}>
                                        {item.time}
                                    </time>
                                    <h3 className={`text-base md:text-lg ${itemColor} px-4 py-2 rounded-lg font-semibold`}>
                                        {item.company}
                                    </h3>
                                    <p className="text-sm md:text-base font-accent">{item.position}</p>
                                </div>
                                {index < timelineData.length - 1 && (
                                    <div
                                        className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-1 h-full ${itemColor} ${
                                            isEven ? "left-full ml-2" : "right-full mr-2"
                                        }`}
                                        aria-hidden="true"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Professionals;
