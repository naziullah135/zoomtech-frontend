import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import AeydeBottom from '../../src/components/CaseStudies/AeydeBottom';
import CaseStudiesImageCompare from '../../src/components/CaseStudies/CaseStudiesImageCompare';
import CaseStudyBanner from '../../src/components/CaseStudies/CaseStudyBanner';
import FreeTrial from '../../src/components/common/FreeTrial';
import { aeydeData } from '../../src/data/caseStudies.data';

const AeydeCaseStudy = () => {
    return (
        <>
            <Head>
                <title>Case Studies - Aeyde - Zoom Tech Street</title>
                <meta name="description" content="Case Studies - Aeyde" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <CaseStudyBanner banner={aeydeData.banner} />
                <CaseStudiesImageCompare doubleImageCompare={aeydeData.doubleImageCompare} />
                <AeydeBottom singleImageCompare={aeydeData.singleImageCompare} />
                <FreeTrial />
            </Box>
        </>
    );
};

export default AeydeCaseStudy;