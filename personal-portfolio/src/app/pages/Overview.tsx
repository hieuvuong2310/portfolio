"use client";
import getOverview from "../server/src/helper/getOverview";
import React from 'react';
import Image from 'next/image';

type OverviewProps = {
    line1: string;
    line2: string;
    line3: string;
    line4?: string;
    profile: string;
};

type OverviewContent = {
    line1?: string;
    line2?: string;
    line3?: string;
    line4?: string;
    profile?: string;
};

function Overview() {
    const overviewContent = getOverview() as OverviewContent;
    const overviewState: OverviewProps = {
        line1: overviewContent?.line1 || "Line 1 not available",
        line2: overviewContent?.line2 || "Line 2 not available",
        line3: overviewContent?.line3 || "Line 3 not available",
        line4: overviewContent?.line4,
        profile: overviewContent?.profile || "Profile not available"
    };
    
    const highlightText = (text: string, highlights: string[]) => {
        const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'gi'));
        return parts.map((part, index) =>
            highlights.some(h => part.toLowerCase() === h.toLowerCase()) 
                ? <span key={index} className="bg-accent px-1 rounded">{part}</span> 
                : part
        );
    };
    
    return (
      <section
        className="px-4 md:px-10 lg:px-20 py-16 md:py-20"
        aria-label="Overview section"
      >
        <h2 className="text-5xl md:text-7xl lg:text-[100px] font-primary text-primary text-stroke-3 text-stroke-black mb-8 md:mb-[-60px]">
          Overview
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12 mt-16 lg:mt-20">
          <div className="flex-1 space-y-4 md:space-y-6">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              {overviewState.line1}
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              {overviewState.line2}
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              {highlightText(overviewState.line3, [
                "SAP",
                "Government of British Columbia",
                "Atimi Software"
              ])}
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed">
              {overviewState.line4}
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={overviewState.profile}
                alt="Lucas Vuong profile picture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default Overview;