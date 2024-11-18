import React from "react";
import Link from "next/link";
function Contact() {
    return (
        <div className="pl-10 pr-10 pb-10">
            <div className="text-[100px] font-primary text-primary text-stroke-3 text-stroke-black">Contact</div>
            <div className="flex text-[20px] font-accent space-x-2">
                <div>
                    Email:
                </div>
                <div className="flex-1 underline">
                    <a href="mailto:vthieu@uvic.ca" target="_blank">
                        vthieu@uvic.ca
                    </a>
                </div>
            </div>
            <div className="text-[20px] font-accent">Phone: 2508806181</div>
        </div>
    )
}

export default Contact;