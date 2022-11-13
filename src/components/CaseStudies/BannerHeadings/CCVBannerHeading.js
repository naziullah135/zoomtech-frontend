import { Box, Typography } from '@mui/material';
import React from 'react';

const CCVBannerHeading = () => {
    return (
        <Typography sx={{ fontSize: { md: 46, xs: 33 }, }} variant="h1">
            CCV Progresses Towards Sustainable <Box sx={{ color: "secondary.main" }}>Business Growth</Box>
        </Typography>
    );
};

export default CCVBannerHeading;