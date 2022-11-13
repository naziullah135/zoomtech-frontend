import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import AboutBanner from '../../src/components/About/AboutBanner';
import AllStarted from '../../src/components/About/AllStarted';
import Benefits from '../../src/components/About/Benefits';
import LifeOfZoomTech from '../../src/components/About/LifeOfZoomTech';
import OurValues from '../../src/components/About/OurValues';
import FreeTrial from '../../src/components/common/FreeTrial';
import Clients from '../../src/components/Home/Clients';
import { lifeOfImg } from '../../src/data/about.data';
const About = () => {
    return (
        <>
            <Head>
                <title>About - Zoom Tech Street</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <AboutBanner />
                <AllStarted />
                <OurValues />
                <LifeOfZoomTech images={lifeOfImg} />
                <Box mb={10} />
                <Clients />
                <Benefits />
                <FreeTrial />
            </Box>
        </>

    );
};

export default About;