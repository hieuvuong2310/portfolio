import React from "react";
import { CONTACT_INFO } from "../constants/config";

function Contact() {
    return (
        <section 
            className="px-4 md:px-10 lg:px-20 py-16 md:py-20"
            aria-label="Contact section"
        >
            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-primary text-primary text-stroke-3 text-stroke-black mb-12 md:mb-16">
                Contact
            </h2>
            <div className="space-y-6 md:space-y-8 max-w-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-lg md:text-xl font-accent font-semibold min-w-[80px]">
                        Email:
                    </span>
                    <a 
                        href={`mailto:${CONTACT_INFO.email}`}
                        className="text-lg md:text-xl font-accent text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2"
                        aria-label={`Send email to ${CONTACT_INFO.email}`}
                    >
                        {CONTACT_INFO.email}
                    </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-lg md:text-xl font-accent font-semibold min-w-[80px]">
                        Phone:
                    </span>
                    <a 
                        href={`tel:${CONTACT_INFO.phoneRaw}`}
                        className="text-lg md:text-xl font-accent text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2"
                        aria-label={`Call ${CONTACT_INFO.phone}`}
                    >
                        {CONTACT_INFO.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;