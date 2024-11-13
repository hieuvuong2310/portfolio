import React from 'react';
import ResumeButton from '../components/ResumeButton';
import Character from '../img/main.png';
import Image from 'next/image';
function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-[150px] font-primary text-primary">Lucas Vuong</h1>
            <h1 className='font-accent'>DevOps, Fullstack Engineer</h1>
            <Image src={Character} width={150} height={150} alt="character"/>
            <ResumeButton />
        </div>
    )
};

export default HomePage;