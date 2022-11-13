import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../Custom/PrimaryButton';
import magicWandIcon from "./../../assets/icons/homepage/noun-magic-wand-217915 1.svg";
import magicWandIcon2 from "./../../assets/icons/homepage/noun-magic-wand-217915 2.svg";
import arrow from "./../../assets/icons/homepage/Vector 26.svg";
import retouch from "./../../assets/images/HomePage/retouch.jpg";

const Retouch = ({ isXsDevice }) => {
    return (
        <Box component={"section"} sx={{ py: 10 }}>
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={6} xs={12}>
                        <Box sx={{ maxWidth: 420, textAlign: "right", mb: -2, display: { md: "block", xs: "none" } }}><Image src={magicWandIcon} alt="" /></Box>
                        <Typography sx={{ color: "text.primary", textAlign: { md: "left", xs: "center" }, fontSize: { md: 33, xs: 26 } }} variant='h2'>We Retouch Your <Box component={"span"} sx={{ color: "secondary.main" }}>Photos</Box><br /> Like no Other</Typography>
                        <Typography sx={{ color: "text.secondary", mb: 5, mt: 3 }} variant='subtitle1'>We help to improve your photos and make them more realistic. We have had a variety of customer service opportunities. We believe providing client supports is as important as serving our clients timely and qualitatively end-to-end solutions.
                            <br /> <br />
                            We use all the resources available to us to make sure that our clients are always satisfied with the work we do.</Typography>
                        <Link href={"/contact-us"} passHref>
                            <PrimaryButton fullWidth={isXsDevice}>Get Started</PrimaryButton>
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box sx={{ textAlign: "center", '& .retouch': { maxWidth: '100%' }, '& .magic': { mt: 3, ml: 5, display: { md: "inline-block", xs: "none" } } }}>
                            <Box component={"span"} sx={{ display: { md: "block", xs: "none" } }}><Image src={arrow} alt="" /></Box>
                            <Image className='retouch' src={retouch} alt="retouch" />
                            <img className='magic' src={magicWandIcon2.src} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Retouch;