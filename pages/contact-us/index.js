import { Box } from '@mui/system';
import Head from 'next/head';
import React from 'react';
import Contact from '../../src/components/Home/Contact/Contact';

const ContactPage = () => {
    return (
        <>
            <Head>
                <title>Contact - Zoom Tech Street</title>
                <meta name="description" content="Contact" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box component={'main'}>
                <Contact contactPage />
            </Box>
        </>
    );
};

export default ContactPage;