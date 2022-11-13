import { Box } from '@mui/material';
import React from 'react';
import bannerBg from "./../../assets/icons/homepage/banner-wave-bg.svg";
const bannerStyle = {
    bgcolor: "light.main",
    backgroundImage: `url("${bannerBg.src}")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPositionY: "bottom",
}

const BannerWrapper = ({ children, sx, ...others }) => {
    return (
        <Box component={"section"} {...others} sx={{ ...bannerStyle, ...sx }}>
            {children}
        </Box>
    );
};

export default BannerWrapper;