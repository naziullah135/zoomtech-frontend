import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import LifeOfZoomTech from '../../src/components/About/LifeOfZoomTech';
import CareerBanner from '../../src/components/Careers/CareerBanner';
import Vacancy from '../../src/components/Careers/Vacancy';
import WhereWork from '../../src/components/Careers/WhereWork';
import { careersImg } from '../../src/data/career.data';

const Careers = () => {
    return (
        <>
            <Head>
                <title>Career - Zoom Tech Street</title>
                <meta name="description" content="Career" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <CareerBanner />
                <Vacancy />
                <LifeOfZoomTech images={careersImg} />
                <WhereWork />
            </Box>
        </>
    );
};

export default Careers;