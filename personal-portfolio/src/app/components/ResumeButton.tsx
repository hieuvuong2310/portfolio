import Download from "../img/download.png";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO } from "../constants/config";

function ResumeButton() {
  return (
    <Link
      href={CONTACT_INFO.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-black font-accent text-lg tracking-wider rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
      aria-label="Download resume PDF"
    >
      <Image 
        src={Download} 
        width={24} 
        height={24} 
        alt="Download icon" 
        className="w-6 h-6"
      />
      <span>Resume</span>
    </Link>
  );
}

export default ResumeButton;
