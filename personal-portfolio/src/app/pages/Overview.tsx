"use client";
import getOverview from "../server/src/helper/getOverview";
import React from 'react';

type OverviewProps = {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    profile: string;
};

function Overview() {
    const overviewContent = getOverview();
    const overviewState: OverviewProps = {
        line1: overviewContent?.line1 || "Line 1 not available",
        line2: overviewContent?.line2 || "Line 2 not available",
        line3: overviewContent?.line3 || "Line 3 not available",
        line4: overviewContent?.line4 || "Line 4 not available",
        profile: overviewContent?.profile || "Profile not available"
    };
    const Profile = overviewState.profile;
    const highlightText = (text: string, highlights: string[]) => {
        const parts = text.split(new RegExp(`(${highlights.join('|')})`, 'gi'));
        return parts.map((part, index) =>
            highlights.includes(part) ? <span key={index} className="bg-accent">{part}</span> : part
        );
    };
    
    return (
        <div className="pl-10 pr-10 pb-10">
            <div className="text-[100px] font-primary text-primary text-stroke-3 text-stroke-black mb-[-60px]">Overview</div>
            <div className="flex items-center">
                <div className="flex-1">
                    <div className="flex-none h-auto overflow-auto pr-10 text-[20px]">
                        <div>{overviewState.line1}</div>
                        <br />
                        <div>{highlightText(overviewState.line2, ['SAP', 'Government of British Columbia', 'Atimi Software', 'DevOps', 'Fullstack', 'Quality Assurance'])}</div>
                        <br />
                        <div>{overviewState.line3}</div>
                        <br />
                        <div>{overviewState.line4}</div>
                    </div>
                    
                </div>
                <div className="flex-2">
                    {/* <img src={overviewState.profile} width={150} height={150} alt="profile"></img> */}
                    <img
                    src={Profile} // Use this sample image or upload your own via the Media Explorer
                    width="400" // Transform the image: auto-crop to square aspect_ratio
                    height="400"
                    alt="Profile image"
                    />
                </div>
            </div>
            
            
        </div>
    )
}

export default Overview;