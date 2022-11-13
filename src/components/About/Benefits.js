import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { benefits } from '../../data/price.data';
import IconCard from '../common/IconCard';
import cubeIcon from "./../../assets/images/About/noun-cube-3d.svg";
const Benefits = () => {
    return (
        <Box component={"section"} sx={{ pt: { md: 18, xs: 12 } }}>
            <Container>
                <Box sx={{ ml: 18, mb: -4, display: { md: "block", xs: "none" } }}>
                    <Image src={cubeIcon} alt="" />
                </Box>
                <Typography variant='h2' sx={{ textAlign: "center", color: { md: "text.primary", xs: "secondary.main" }, mb: { md: 12, sm: 9, xs: 5 }, fontSize: { md: 33, xs: 26 } }}>Benefits</Typography>
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