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
                <Link href="https://github.com/hieuvuong2310/" target="_blank">
                    <Image src={GitHub} width={24} height={24} alt="github"/>
                </Link>
                <Link href="https://www.linkedin.com/in/lucas-vuong-495b54199/" target="_blank">
                    <Image src={LinkedIn} width={24} height={24} alt="linkedin"/>
                </Link>
            </div>
        </div>
        
    )
}

export default NavBar;