import { Box, Typography } from '@mui/material';
import React from 'react';

const JewelryMediasHeading = () => {
    return (
        <Typography sx={{ fontSize: { md: 46, xs: 33 }, }} variant="h1">
            Small Business Concerns: <Box component={"span"} sx={{ color: "secondary.main" }}>Time And Money</Box>
        </Typography>
    );
};

export default JewelryMediasHeading;