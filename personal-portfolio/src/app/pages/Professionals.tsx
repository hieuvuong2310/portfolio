"use client";
import React from 'react';
import getProfessionals from '../server/src/helper/getProfessionals';

function Professionals() {
    const timelineData = getProfessionals();
    function isEven(num: number) {
        if (num % 2 === 0) {
            return "bg-accent";
        } else {
            return "bg-job";
        }

    }
    return (
        <div className='pl-10 pr-10 pb-10'>
        <div className="text-[100px] font-primary text-primary text-stroke-3 text-stroke-black">Professionals</div>
        <div className="relative py-10">
            <div className="grid grid-cols-9 gap-y-10">
                <div className="col-span-4 col-start-1 text-center text-[45px] bg-accent">Professional Career</div>
                <div className="col-span-4 col-start-6 text-center text-[45px] bg-job">Extra Curricular</div>
                {timelineData.map((item, index) => (
                    <div
                    key={index}
                    className={`relative z-10 flex flex-col items-center col-span-4 ${
                        index % 2 === 0 ? "col-start-1" : "col-start-6"
                    }`}
                    >
                        <div
                            className={`w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl ${isEven(index)}`}
                        >
                            {item.icon}
                        </div>
                        <div className="flex flex-col items-center text-center mt-4">
                            <h3 className="text-lg font-bold font-accent">{item.time}</h3>
                            <h3 className={`text-lg ${isEven(index)} p-2`}>{item.company}</h3>
                            <p className="text-sm">{item.position}</p>
                        </div>
                        <div
                            className={`absolute top-1/2 transform -translate-y-1/2 w-1 h-full ${isEven(index)} ${
                            index % 2 === 0 ? "left-full ml-2" : "right-full mr-2"
                            }`}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Professionals;
