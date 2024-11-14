"use client";
import getOverview from "../server/src/helper/getOverview";
import React, {useState} from 'react';

type OverviewProps = {
    overview: string;
    profile: string;
};

export const getStaticProps = async () => {
    const overviewData = getOverview();
    return {
        props: {
            overview: overviewData.overview,
            profile: overviewData.profile,
        },
    };
};
const Overview: React.FC<OverviewProps> = ({ overview, profile }) =>{
    return (
        <div>
            <h1>{overview}</h1>
        </div>
    )
}

export default Overview;