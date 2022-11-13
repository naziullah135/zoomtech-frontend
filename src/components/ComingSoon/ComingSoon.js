import { Box, Typography } from '@mui/material';
import React from 'react';
import FreeTrial from '../common/FreeTrial';
import CustomerStories from '../Home/CustomerStories';

const ComingSoon = () => {
    return (
        <Box>
            <Box py={5}>
                <Typography variant='h2' textAlign={"center"}>Please check back later</Typography>
                <Typography variant='body1' sx={{ textAlign: "center", mt: 3, maxWidth: "540px", mx: "auto" }}>Our blog page is being updated. Please check back later for
                    insightful E-commerce industry news, tips, and resources.</Typography>
            </Box>
            <CustomerStories />
            <FreeTrial />
        </Box>
    );
};

export default ComingSoon;