import MenuIcon from "./MenuIcon";
import Image from 'next/image';
import LinkedIn from '../img/linkedin.png';
import GitHub from '../img/github.png';
import Link from 'next/link';
function NavBar() {
    return (
        <div className="flex">
            <Link href='/' className="flex-1 text-accent text-[20px]">Lucas.dev</Link>
            <div className="flex-2 flex flex-col items-center space-y-4">
                <MenuIcon/>
                <Image src={GitHub} width={24} height={24} alt="github"/>
                <Image src={LinkedIn} width={24} height={24} alt="linkedin"/>
            </div>
        </div>
        
    )
}

export default NavBar;