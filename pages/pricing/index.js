import { Box } from '@mui/material';
import Head from 'next/head';
import React, { useEffect } from 'react';
import FreeTrial from '../../src/components/common/FreeTrial';
import Clients from '../../src/components/Home/Clients';
import Benefits from '../../src/components/Pricing/Benefits';
import PriceCalculator from '../../src/components/Pricing/PricingCalculator/PriceCalculator';

const Pricing = () => {

    return (
        <>
            <Head>
                <title>Pricing - Zoom Tech Street</title>
                <meta name="description" content="Pricing" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={'main'}>
                <PriceCalculator image />
                <PriceCalculator />
                <Clients />
                <Benefits />
                <FreeTrial />
            </Box>
        </>
    );
};

export default Pricing;