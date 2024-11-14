import React from 'react';
import ResumeButton from '../components/ResumeButton';
import Character from '../img/main.png';
import Image from 'next/image';
function HomePage() {
    return (
        <div className="flex flex-col items-center h-screen space-y-10">
            <div className='flex flex-col items-center space-y-[-2px]'>
                <h1 className="text-[150px] font-primary text-primary text-stroke-3 text-stroke-black">Lucas Vuong</h1>
                <h1 className='text-[30px] font-accent'>DevOps, Fullstack Engineer</h1>
            </div>
            <Image src={Character} width={150} height={150} alt="character"/>
            <ResumeButton />
        </div>
    )
};

export default HomePage;