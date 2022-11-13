import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import treeDIcon from "./../../../assets/icons/homepage/noun-3d-2360820 1.svg";
import unionIcon from "./../../../assets/icons/homepage/Group 85.svg";
import crop from "./../../../assets/icons/homepage/noun-crop-673421.svg";
import arrow from "./../../../assets/icons/homepage/Vector (6).svg";
import Image from 'next/image';
import ContactForm from './ContactForm';
import Address from './Address';



const Contact = ({ contactPage }) => {
    const isSmDevice = useMediaQuery(theme => theme.breakpoints.down("md"))
    return (
        <Box component={"section"} my={6}>
            <Container>
                {
                    contactPage &&
                    <>
                        <Typography sx={{ mb: "20px", ml: 6, fontSize: { md: 46, xs: 26 }, textAlign: "center", '& .union': { mb: 2, display: { md: "inline-block", xs: "none" } } }} variant='h1'>
                            <Box component={'span'} sx={{ color: 'secondary.main' }}>Talk</Box> to  Our Service Specialist
                            <img className='union' src={unionIcon.src} alt="" />
                        </Typography>
                        <Typography sx={{ maxWidth: 677, mx: "auto", textAlign: "center" }} variant='subtitle2'>
                            We’re here to give answers to your questions so don’t be a stranger and talk to us. Our specialists are waiting to hear from you. If you give us a call, fill up the below form and let us know what’s bothering you. Our team will be happy to answer any question and we will ensure that you are not waiting for an answer.
                        </Typography>
                    </>
                }
                <Box sx={{ textAlign: 'right', mr: 10, display: { md: "block", xs: "none" } }}>
                    <Image src={treeDIcon} alt="" />
                </Box>
                <Grid container spacing={5}>
                    <Grid item md={6} xs={12} sx={{ mt: (contactPage && !isSmDevice) ? 10 : 0 }}>
                        <Box sx={{ background: { md: `url("${arrow.src}") no-repeat 90% 95%` } }}>
                            {
                                !contactPage &&
                                <>
                                    <Typography sx={{ mb: "20px", '& .union': { mb: 2, display: { md: "inline-block", xs: "none" } } }} variant='h3'>
                                        <Box component={'span'} sx={{ color: 'primary.main' }}>Talk</Box> to  Our Service Specialist
                                        <img className='union' src={unionIcon.src} alt="" />
                                    </Typography>
                                    <Typography sx={{ maxWidth: 360 }} variant='subtitle2'>
                                        We’re here to give answers to your questions so don’t be a stranger and talk to us. Our specialists are waiting to hear from you. If you give us a call, fill up the below form and let us know what’s bothering you. Our team will be happy to answer any question and we will ensure that you are not waiting for an answer.
                                    </Typography>
                                </>
                            }
                            {!isSmDevice && <Address />}
                        </Box>
                        <Box sx={{ textAlign: "right", maxWidth: 210, mx: "auto", display: { md: "block", xs: "none" } }}>
                            <Image src={crop} alt="" />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <ContactForm />
                    </Grid>
                    {isSmDevice &&
                        <Grid item xs={12}>
                            <Address />
                        </Grid>}

                </Grid>

            </Container>
        </Box>
    );
};

export default Contact;