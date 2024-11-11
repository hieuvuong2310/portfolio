import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link href="/">MyPortfolio</Link>
                </div>
                <ul className="flex space-x-4">
                    <Link href="/about" className="text-gray-300 hover:text-white"> About </Link>
                    <Link href="/projects" className="text-gray-300 hover:text-white"> Projects </Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white"> Contact </Link>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;