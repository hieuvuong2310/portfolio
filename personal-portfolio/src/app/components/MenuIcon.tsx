"use client";
import Link from 'next/link';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import LinkedIn from '../img/white-linkedin.png';
import GitHub from '../img/white-github.png';
import Image from 'next/image';

const MenuIcon: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="hamburger text-3xl" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            {
                isOpen && 
                <div className="fixed top-0 right-0 w-1/5 h-full bg-black text-white z-50">
                    <div className="flex justify-end p-4">
                        <FaTimes className="text-4xl cursor-pointer" onClick={closeMenu} />
                    </div>
                    <ul className="flex flex-col items-center justify-center h-full space-y-4 text-[40px]">
                        <li>
                            <Link href="/" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" onClick={closeMenu}>
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={closeMenu}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <div className='flex justify-center space-x-4'>
                                <div>
                                    <Image src={GitHub} width={30} height={30} alt="github"/>
                                </div>
                                <div>
                                    <Image src={LinkedIn} width={30} height={30} alt="linkedin"/>
                                </div>
                            </div>
                        </li>
                    </ul>
                    
                </div>
            }
        </nav>
    );
};

export default MenuIcon;