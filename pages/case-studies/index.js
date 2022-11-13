import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import FreeTrial from '../../src/components/common/FreeTrial';
import CustomerStories from '../../src/components/Home/CustomerStories';

const CaseStudies = () => {
    return (
        <>
            <Head>
                <title>Case Studies - Zoom Tech Street</title>
                <meta name="description" content="Case Studies" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <Container>
                    <Box my={6}>
                        <Typography variant='h2' sx={{ textAlign: "center" }}>Image Editing and CGI Case Studies</Typography>
                        <Typography variant='body1' sx={{ textAlign: "center", mx: "auto", maxWidth: "550px", mt: 3 }}>Take a look how brands, studios, agencies, Wholesalers and retailers are already benefiting from effortless post-production and Computer-generated imagery .</Typography>
                    </Box>
                </Container>

                <CustomerStories />
                <FreeTrial />
            </Box>
        </>
    );
};

export default CaseStudies;