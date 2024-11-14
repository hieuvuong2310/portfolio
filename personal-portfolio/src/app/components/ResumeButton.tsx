import Download from "../img/download.png"
import Image from "next/image";
function ResumeButton() {
  return (
    <button className="w-[20%] h-[4%] bg-accent rounded-[20px]">
        <div className="flex flex-col items-center justify-center">
            <div className="flex pl-10 pr-10 items-center">
                <div className="pr-2">
                    <Image src={Download} width={24} height={24} alt="download"/>
                </div>
                <div className="text-[20px] tracking-widest">
                    Resume
                </div>
                
            </div>
        </div>
    </button>
    
  );
}

export default ResumeButton;