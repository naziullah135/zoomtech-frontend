import { Box, Container, Typography } from '@mui/material';
import React from 'react';

const WhereWork = () => {
    return (
        <Box sx={{ pb: 12 }}>
            <Container>
                <Typography textAlign="center" mb={4} sx={{ fontSize: { md: 33, xs: 26 } }} variant='h2'>Where Do <Box component={"span"} sx={{ color: "secondary.main" }}>We Work?</Box></Typography>
                <Typography variant='body1' sx={{ color: "text.secondary" }}>
                    At Zoom Tech Street, we believe that great ideas come from anywhere. So, we have team members in offices all around the world.
                    <br /> <br />
                    Our company is headquartered in Dhaka, Bangladesh, but we have team members all around the world. We collaborate across time zones on a daily basis and thrive as a company with many different perspectives at
                    the table.
                    <br /> <br />
                    No matter where you are in the world, you can join our team and help us create amazing content for our clients!
                </Typography>
            </Container>
        </Box>
    );
};

export default WhereWork;