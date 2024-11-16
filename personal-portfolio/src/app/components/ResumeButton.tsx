import Download from "../img/download.png"
import Image from "next/image";
function ResumeButton() {
  return (
        <button className="w-[20%] h-[4%] bg-accent rounded-[20px]">
            <a href="https://firebasestorage.googleapis.com/v0/b/personal-web-4022f.firebasestorage.app/o/TrongHieu_Vuong_Resume_2025.pdf?alt=media&token=b0db1034-cf8f-4d51-b8da-701ef23f3f13" download>
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
            </a>
        </button>
  );
}

export default ResumeButton;