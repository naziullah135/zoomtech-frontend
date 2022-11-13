import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../../Custom/PrimaryButton';
import BannerWrapper from '../BannerWrapper';
import ImageCompare from '../ImageCompare';

const bannerStyle = {
    height: {
        md: "calc(100vh - 90px)",
        xs: "fit-content"
    },
    minHeight: 700,
    maxHeight: {
        md: 700,
        xs: "fit-content"
    },
    pt: 6,
    pb: 15
}
const ServiceBanner = ({ data }) => {
    const { img1, img2, title1, highlightTitle, title3, description, buttonText } = data;
    const isXsDevice = useMediaQuery(theme => theme.breakpoints.down("sm"))
    return (
        <BannerWrapper sx={bannerStyle}>
            <Container>
                <Grid container alignItems="center" spacing={10}>
                    <Grid item md={6} xs={12} order={{ md: 1, xs: 2 }}>
                        <Box sx={{ bgcolor: "Background", textAlign: "center", borderRadius: "2px" }}>
                            <ImageCompare img1={img1} img2={img2} />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
                        <Box>
                            <Typography sx={{ fontSize: { md: 46, xs: 33 }, textAlign: { md: "left", xs: "center" } }} variant='h1'>{title1} <Box component={"span"} color="secondary.main">{highlightTitle}</Box> {title3}</Typography>
                            <Typography variant='body2' sx={{ mt: 1, mb: 5 }}>{description}</Typography>
                            {
                                buttonText &&
                                <Link href={"/contact-us"} passHref>
                                    <PrimaryButton fullWidth={isXsDevice}>{buttonText}</PrimaryButton>
                                </Link>
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </BannerWrapper>
    );
};

export default ServiceBanner;