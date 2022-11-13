import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PrimaryButton from '../Custom/PrimaryButton';
import cropIcon from "./../../assets/icons/homepage/noun-crop-673421.svg";
import threeDIcon from "./../../assets/icons/homepage/noun-3d-4277038 1.svg";
import cursorIcon from "./../../assets/icons/homepage/noun-cursor-2062720 1.svg";
import component1 from "./../../assets/icons/homepage/Component 1.svg";
import ecommerce from "./../../assets/images/HomePage/ecommerce.png";
import Image from 'next/image';
import Link from 'next/link';

const ECommerce = ({ isXsDevice }) => {
    return (
        <Box sx={{ backgroundColor: "light.main", py: 10 }} component={"section"}>
            <Container>
                <Grid container alignItems="center" spacing={5}>
                    <Grid item md={6} xs={12} order={{ md: 1, xs: 2 }}>
                        <Box sx={{ textAlign: "center", '& .ecommerce': { maxWidth: '100%' } }}>
                            <Box sx={{ textAlign: "right", display: { md: "block", xs: "none" } }}>
                                <Image src={cropIcon} alt="cropIcon" />
                            </Box>
                            <Image className='ecommerce' src={ecommerce} alt="ecommerce" />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
                        <Typography sx={{ color: "text.primary", fontSize: { md: 33, xs: 26 } }} variant='h2'>E-Commerce Image
                            <Box component={"span"} sx={{ color: "secondary.main", background: { lg: `url("${component1.src}")` }, backgroundRepeat: { lg: "no-repeat" }, backgroundSize: { lg: "contain" }, pb: 2, pr: 1 }}> Editing</Box><Box sx={{ display: { lg: "inline-block", xs: "none" } }} component={"span"}><Image src={cursorIcon} alt="cursorIcon" /></Box> </Typography>
                        <Typography sx={{ color: "text.secondary", mb: 5, mt: 3 }} variant='subtitle1'>Taking great product photos is only half the battle. Theother half is post-processing, which can be time consuming and tedious.
                            <br /> <br />
                            That&apos;s where we come in. Our team of eCommerce experts specializes in post-processing, from basic background removal to adva-nced retouching. We can help you create consistent, high-quality images that will grab your customers&apos; attention and boost your sales.</Typography>
                        <Link href={"/services"} passHref>
                            <PrimaryButton fullWidth={isXsDevice}>Explore More</PrimaryButton>
                        </Link>
                        <Box sx={{ textAlign: "right", mr: 4, display: { md: "block", xs: "none" } }}>
                            <Image src={threeDIcon} alt="threeDIcon" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ECommerce;