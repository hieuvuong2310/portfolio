"use client";
import Link from 'next/link';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const MenuIcon: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="hamburger" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            {
                isOpen && 
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                </ul>
            }
        </nav>
    );
};

export default MenuIcon;