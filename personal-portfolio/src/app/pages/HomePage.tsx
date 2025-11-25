import React from 'react';
import ResumeButton from '../components/ResumeButton';
import Character from '../img/main.png';
import Image from 'next/image';
import { SITE_CONFIG } from '../constants/config';

function HomePage() {
    return (
        <section 
            className="flex flex-col items-center justify-center min-h-screen px-4 py-20 space-y-8 md:space-y-12"
            aria-label="Home section"
        >
            <div className='flex flex-col items-center space-y-2 md:space-y-4'>
                <h1 className="text-6xl md:text-8xl lg:text-[120px] xl:text-[150px] font-primary text-primary text-stroke-3 text-stroke-black text-center leading-tight">
                    {SITE_CONFIG.name}
                </h1>
                <h2 className='text-xl md:text-2xl lg:text-3xl font-accent text-center'>
                    {SITE_CONFIG.tagline}
                </h2>
            </div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                <Image 
                    src={Character} 
                    width={192} 
                    height={192} 
                    alt="Lucas Vuong character illustration"
                    className="object-contain"
                    priority
                />
            </div>
            <ResumeButton />
        </section>
    );
}

export default HomePage;