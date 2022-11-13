import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PrimaryButton from '../Custom/PrimaryButton';
import arrow from "./../../assets/icons/homepage/Vector 25.svg";
import cube3D from "./../../assets/icons/homepage/noun-3d-cube-1124776 1.svg";
import unionIcon from "./../../assets/icons/homepage/Group 83.svg";
import arrowBg from "../../assets/icons/homepage/arrow-bg-banner.svg";
import ReactTypingEffect from 'react-typing-effect';
import Image from 'next/image';
import BannerWrapper from '../common/BannerWrapper';
import BannerCarousel from './BannerCarousel';
import Link from 'next/link';

const bannerStyle = {
    height: {
        md: "calc(100vh - 100px)",
        xs: "fit-content"
    },
    minHeight: 650,
    maxHeight: {
        md: 1000,
        xs: "fit-content"
    },
    pb: 18,
    display: "flex",
    alignItems: "center",
    '&:before': {
        content: '""',
        width: "100px",
        height: "150px",
        position: "absolute",
        backgroundImage: `url("${arrowBg.src}")`,
        backgroundRepeat: "no-repeat",
        left: 0,
        right: 0,
        mx: "auto",
        transform: "translateX(-600px)",
    },

}

const Banner = ({ isXsDevice }) => {
    return (
        <BannerWrapper sx={bannerStyle}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Box sx={{ textAlign: "center", display: { md: "block", xs: "none" } }}>
                            <Image src={arrow} alt="" />
                        </Box>

                        <Typography sx={{ textAlign: { sm: "left", xs: "center" }, maxWidth: 500, fontSize: { lg: 46, md: 40, xs: 30 }, '& img': { mb: 2, display: { md: "inline-block", xs: "none" } } }} color="text.primary" variant='h1'>Meet Zoom Tech<img className='union' src={unionIcon.src} alt="" /> <br /> Street,
                            Your Trusted Outsourcing Partner
                        </Typography>
                        <ReactTypingEffect
                            speed={80}
                            eraseSpeed={40}
                            eraseDelay={1000}
                            typingDelay={500}
                            text={["Image Editing", "3D Content"]}
                            cursorRenderer={cursor => <Typography sx={{ fontSize: { lg: 46, md: 40, xs: 30 }, color: "secondary.main" }} variant='h1'>{cursor}</Typography>}
                            displayTextRenderer={text => <Typography sx={{ fontSize: { lg: 46, md: 40, xs: 30 }, color: "secondary.main" }} variant='h1'>{text}</Typography>}
                        />
                        <Typography sx={{ mt: 1, mb: 5, textAlign: { sm: "left", xs: "center" } }} variant='subtitle1'>Your trusted one-stop
                            image editing &amp; 3D visual content solution
                        </Typography>
                        <Link href={"/contact-us"} passHref>
                            <PrimaryButton fullWidth={isXsDevice}>Get Started</PrimaryButton>
                        </Link>
                        <Box sx={{ textAlign: "right", width: "50%", mx: "auto", display: { md: "block", xs: "none" } }}>
                            <Image src={cube3D} alt="" />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <BannerCarousel />
                    </Grid>
                </Grid>
            </Container>
        </BannerWrapper>
    );
};

export default Banner;