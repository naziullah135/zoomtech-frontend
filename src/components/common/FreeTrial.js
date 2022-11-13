import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import PrimaryButton from '../Custom/PrimaryButton';
import bannerThumbnail from "./../../assets/icons/pricing/free-trial-banner.svg";
import arrow from "./../../assets/icons/pricing/free-trial-arrow.svg";
import Link from 'next/link';
const FreeTrial = () => {
    const isXsDevice = useMediaQuery(theme => theme.breakpoints.down("sm"))
    return (
        <Box component={"section"} sx={{ my: { md: 18, sm: 10, xs: 6 } }} >
            <Container>
                <Box sx={{ p: { md: 10, sm: 4, xs: 2 }, bgcolor: "lightYellow2.main", borderRadius: "2px" }}>
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item md={6} xs={12}>
                            <Typography variant='h2' sx={{ textAlign: { sm: "left", xs: "center" } }}>Take The <Box component={"span"} color="secondary.main">Free</Box> Trial Today!</Typography>
                            <Typography variant='body2' sx={{ textAlign: { sm: "left", xs: "center" }, color: "text.darkGray", mt: 1, mb: 5 }} >And get to know the quality of our work, price of the task and speed of our team.</Typography>
                            <Link href={"/contact-us"} passHref>
                                <PrimaryButton fullWidth={isXsDevice}>Get in Touch</PrimaryButton>
                            </Link>
                            <Box sx={{ textAlign: "center", display: { lg: 'block', xs: 'none' } }}>
                                <Image src={arrow} alt="" />
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box textAlign="center">
                                <Image src={bannerThumbnail} alt="" />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box >
    );
};

export default FreeTrial;