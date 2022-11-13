import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import AllServices from '../../src/components/AllServices/AllServices';
import FreeTrial from '../../src/components/common/FreeTrial';

const Services = () => {
    return (
        <>
            <Head>
                <title>All Services - Zoom Tech Street</title>
                <meta name="description" content="All Services" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={'main'}>
                <AllServices />
                <FreeTrial />
            </Box>
        </>
    );
};

export default Services;