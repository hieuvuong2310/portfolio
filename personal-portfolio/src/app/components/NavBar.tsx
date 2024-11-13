import MenuIcon from "./MenuIcon";
import Image from 'next/image';
import LinkedIn from '../img/linkedin.png';
import GitHub from '../img/github.png';
function NavBar() {
    return (
        <div className="flex">
            <h1 className="flex-1">lucas.dev</h1>
            <div className="flex-2">
                <MenuIcon/>
                <Image src={GitHub} width={24} height={24} alt="github"/>
                <Image src={LinkedIn} width={24} height={24} alt="linkedin"/>
            </div>
        </div>
        
    )
}

export default NavBar;