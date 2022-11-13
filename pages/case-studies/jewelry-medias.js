import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import CaseStudiesImageCompare from '../../src/components/CaseStudies/CaseStudiesImageCompare';
import CaseStudyBanner from '../../src/components/CaseStudies/CaseStudyBanner';
import JewelryMediasBottom from '../../src/components/CaseStudies/JewelryMediasBottom';
import FreeTrial from '../../src/components/common/FreeTrial';
import { jewelryMediasData } from '../../src/data/caseStudies.data';

const JewelryMediasCaseStudy = () => {
    return (
        <>
            <Head>
                <title>Case Studies - Jewelry Medias - Zoom Tech Street</title>
                <meta name="description" content="Case Studies - Jewelry Medias" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <CaseStudyBanner banner={jewelryMediasData.banner} />
                <CaseStudiesImageCompare doubleImageCompare={jewelryMediasData.doubleImageCompare} />
                <JewelryMediasBottom singleImageCompare={jewelryMediasData.singleImageCompare} />
                <FreeTrial />
            </Box>
        </>
    );
};

export default JewelryMediasCaseStudy;