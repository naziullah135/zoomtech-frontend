import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { benefits } from '../../data/price.data';
import IconCard from '../common/IconCard';

const Benefits = () => {
    return (
        <Box component={"section"} sx={{ bgcolor: { md: "light.main", xs: "unset" }, mt: { sm: 10, xs: 6 }, pt: 15, pb: { sm: 15, xs: 3 } }}>
            <Container>
                <Typography sx={{ textAlign: "center", mb: 12, fontSize: { md: 33, xs: 26 } }} variant='h2'><Box sx={{ display: { sm: "inline-block", xs: "none" } }}>Outsourced</Box> <Box component={"span"} color="secondary.main">Benefits</Box></Typography>
                <Grid container spacing={3}>
                    {
                        benefits.map((card) => <IconCard card={card} key={card.id} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Benefits;