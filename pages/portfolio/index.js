import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import FreeTrial from '../../src/components/common/FreeTrial';
import PortfolioItems from '../../src/components/Portfolio/PortfolioItems';

const Portfolio = () => {
    return (
        <>
            <Head>
                <title>Portfolio - Zoom Tech Street</title>
                <meta name="description" content="Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <PortfolioItems />
                <FreeTrial />
            </Box>
        </>
    );
};

export default Portfolio;