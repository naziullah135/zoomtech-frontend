import { Box, Typography } from '@mui/material';
import React from 'react';

const AeydeBannerHeading = () => {
    return (
        <Typography sx={{ fontSize: { md: 46, sm: 33, xs: 30 }, }} variant="h1">
            Expert Collaborations and <Box component={"span"} sx={{ color: "secondary.main" }}>Proper Retouching solutions</Box> Helped Aeyde in long term
        </Typography>
    );
};

export default AeydeBannerHeading;