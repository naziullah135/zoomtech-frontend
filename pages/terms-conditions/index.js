import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { termsConditionsData } from '../../src/data/termsConditions.data';

const TermsConditions = () => {
    return (
        <>
            <Head>
                <title>Terms &amp; Conditions - Zoom Tech Street</title>
                <meta name="description" content="Terms &amp; Conditions" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <Container maxWidth="md">
                    <Box sx={{ maxWidth: 736, mx: "auto", mb: { md: 10, xs: 6 } }}>
                        <Typography variant='h3' sx={{ textAlign: "center", my: 3 }}>Zoom Tech Street Terms of Service </Typography>
                        <Typography variant='body1' sx={{ maxWidth: 500, mx: "auto", textAlign: "center", mb: 3, fontWeight: 500 }}>These terms and conditions outline the rules and regulations for the
                            use of https://zoomtechstreet.com Website.
                        </Typography>
                        <Typography variant='body1' sx={{ color: "black", '& b': { fontSize: 19 } }}>
                            <span dangerouslySetInnerHTML={{ __html: termsConditionsData }}></span>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default TermsConditions;