import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import CaseStudiesImageCompare from '../../src/components/CaseStudies/CaseStudiesImageCompare';
import CaseStudyBanner from '../../src/components/CaseStudies/CaseStudyBanner';
import CCVBottom from '../../src/components/CaseStudies/CCVBottom';
import FreeTrial from '../../src/components/common/FreeTrial';
import { ccvData } from '../../src/data/caseStudies.data';

const CCVCaseStudy = () => {

    return (
        <>
            <Head>
                <title>Case Studies - CCV - Zoom Tech Street</title>
                <meta name="description" content="Case Studies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <CaseStudyBanner banner={ccvData.banner} />
                <CaseStudiesImageCompare doubleImageCompare={ccvData.doubleImageCompare} />
                <CCVBottom singleImageCompare={ccvData.singleImageCompare} />
                <FreeTrial />
            </Box>
        </>
    );
};

export default CCVCaseStudy;