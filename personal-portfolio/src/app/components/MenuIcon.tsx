"use client";
import Link from 'next/link';
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import LinkedIn from '../img/white-linkedin.png';
import GitHub from '../img/white-github.png';
import Image from 'next/image';
import { NAVIGATION, CONTACT_INFO } from '../constants/config';

const MenuIcon: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                closeMenu();
            }
        };
        
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <nav className="relative" aria-label="Mobile navigation menu">
            <button
                className="text-2xl md:text-3xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded p-2 transition-opacity hover:opacity-80"
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            {isOpen && (
                <>
                    <div 
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={closeMenu}
                        aria-hidden="true"
                    />
                    <div className="fixed top-0 right-0 w-64 md:w-80 h-full bg-black text-white z-50 shadow-2xl">
                        <div className="flex justify-end p-4">
                        <button
                            className="text-3xl md:text-4xl cursor-pointer hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded p-2"
                            onClick={closeMenu}
                            aria-label="Close menu"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        </div>
                        <ul className="flex flex-col items-center justify-center h-[calc(100%-80px)] space-y-6 text-2xl md:text-3xl">
                            {NAVIGATION.map((item) => (
                                <li key={item.id}>
                                    <Link 
                                        href={`#${item.id}`} 
                                        onClick={closeMenu}
                                        className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-2"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-4">
                                <div className='flex justify-center space-x-6'>
                                    <Link 
                                        href={CONTACT_INFO.github} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                                        aria-label="Visit GitHub profile"
                                    >
                                        <Image src={GitHub} width={32} height={32} alt="GitHub icon"/>
                                    </Link>
                                    <Link 
                                        href={CONTACT_INFO.linkedin} 
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
                                        aria-label="Visit LinkedIn profile"
                                    >
                                        <Image src={LinkedIn} width={32} height={32} alt="LinkedIn icon"/>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </nav>
    );
};

export default MenuIcon;