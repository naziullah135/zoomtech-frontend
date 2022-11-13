import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import cube3D from "./../../assets/icons/homepage/noun-3d-cube-1124776 1.svg";
import unionIcon from "./../../assets/icons/homepage/Group 83.svg";
import Image from 'next/image';
import banner from "./../../assets/images/About/banner.JPG";
import BannerWrapper from '../common/BannerWrapper';
import PrimaryButton from '../Custom/PrimaryButton';

const styles = {
    height: {
        md: "calc(100vh - 80px)",
        xs: "fit-content"
    },
    minHeight: 650,
    maxHeight: {
        md: 1000,
        xs: "fit-content"
    },
    py: 5,
}

const AboutBanner = () => {
    const isXsDevice = useMediaQuery(theme => theme.breakpoints.down("sm"))
    return (
        <BannerWrapper sx={styles}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12} sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <Typography sx={{ textAlign: { sm: "left", xs: "center" }, maxWidth: 500, fontSize: { lg: 46, md: 40, xs: 33 }, '& img': { mb: 2, display: { md: "inline-block", xs: "none" } } }} color="text.primary" variant='h1'> <Box component={"span"} sx={{ color: "secondary.main" }}>Meet Zoom Tech<img className='union' src={unionIcon.src} alt="" /> <br />
                                Street</Box> - The People Behind Innovative Visuals
                            </Typography>
                            <Box sx={{ textAlign: "right", width: "50%", mx: "auto", display: { md: "block", xs: "none" } }}>
                                <Image src={cube3D} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box sx={{ textAlign: { md: "right", xs: "center" } }}>
                            <Image src={banner} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </BannerWrapper>
    );
};

export default AboutBanner;