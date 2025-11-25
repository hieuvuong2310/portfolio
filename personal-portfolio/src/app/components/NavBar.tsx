import MenuIcon from "./MenuIcon";
import Image from 'next/image';
import LinkedIn from '../img/linkedin.png';
import GitHub from '../img/github.png';
import Link from 'next/link';
import { CONTACT_INFO, SITE_CONFIG } from '../constants/config';

function NavBar() {
    return (
        <nav 
            className="flex items-center justify-between w-full"
            role="navigation"
            aria-label="Main navigation"
        >
            <Link 
                href='/' 
                className="text-accent text-lg md:text-xl font-accent hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded px-2"
                aria-label="Home - Lucas.dev"
            >
                {SITE_CONFIG.name.split(' ')[0]}.dev
            </Link>
            <div className="flex items-center gap-4">
                <MenuIcon/>
                <Link 
                    href={CONTACT_INFO.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    aria-label="Visit GitHub profile"
                >
                    <Image src={GitHub} width={24} height={24} alt="GitHub icon"/>
                </Link>
                <Link 
                    href={CONTACT_INFO.linkedin} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                    aria-label="Visit LinkedIn profile"
                >
                    <Image src={LinkedIn} width={24} height={24} alt="LinkedIn icon"/>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;