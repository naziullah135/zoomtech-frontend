import { Box, Container, Typography } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { privacyPolicy } from '../../src/data/privacyPolicy.data';

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - Zoom Tech Street</title>
                <meta name="description" content="Privacy Policy" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={"main"}>
                <Container maxWidth="md">
                    <Box sx={{ maxWidth: 736, mx: "auto", mb: { md: 10, xs: 6 } }}>
                        <Typography variant='h3' sx={{ textAlign: "center", my: 3 }}>Zoom Tech Street Privacy Policy</Typography>
                        <Typography variant='body1' sx={{ color: "text.secondary", '& b': { fontSize: 19 } }}>
                            <span dangerouslySetInnerHTML={{ __html: privacyPolicy }}></span>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default PrivacyPolicy;