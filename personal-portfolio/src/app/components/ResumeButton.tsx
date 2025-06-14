import Download from "../img/download.png"
import Image from "next/image";
import Link from "next/link";
function ResumeButton() {
  return (
        <button className="w-[20%] h-[4%] bg-accent rounded-[20px]">
            <Link href="https://firebasestorage.googleapis.com/v0/b/personal-web-4022f.firebasestorage.app/o/Resume_LucasVuong.pdf?alt=media&token=929135d7-f71b-4cc4-9d4c-fcdfe1015c6a" target="_blank">
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
            </Link>
        </button>
  );
}

export default ResumeButton;
