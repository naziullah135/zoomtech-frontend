import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import BannerWrapper from '../common/BannerWrapper';
import unionIcon from "./../../assets/icons/homepage/Group 83.svg";

const titleStyle = {
    width: "fit-content",
    mx: 'auto',
    mb: 4,
    '& .union': {
        mb: 2,
        display: { md: "inline-block", xs: "none" }
    }
}
const CareerBanner = () => {
    return (
        <BannerWrapper sx={{ pb: 25, pt: { md: 10, xs: 2 } }}>
            <Container>
                <Typography sx={titleStyle} variant='h2'><Box component={'span'} sx={{ color: 'secondary.main' }}>Start Your Journey </Box> With Zoom Tech Street<img className='union' src={unionIcon.src} alt="" />
                </Typography>
                <Typography sx={{ textAlign: "center", maxWidth: 900, mx: "auto" }} variant='body2'>Take your first step and embrace the challenges of the IT universe with Zoom Tech Street. We will provide you with guidance and training to shape you for the industry. We believe in nurturing our members for consistent growth and along the way, there will be tons of fun activities.</Typography>

            </Container>
        </BannerWrapper>
    );
};

export default CareerBanner;