import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import underLine from "./../../assets/images/About/values/underline.svg";
import magicWandIcon from "./../../assets/images/About/values/noun-magic-wand-217915 3.svg";
import cubeRotate from "./../../assets/images/About/noun-cube.svg";
import Image from 'next/image';
import IconCard from '../common/IconCard';
import { values } from '../../data/about.data';

const titleStyle = {
    color: "secondary.main",
    background: {
        md: `url("${underLine.src}") no-repeat bottom`
    },
}
const OurValues = () => {
    return (
        <Box component={"section"} sx={{ pt: { md: 18, xs: 8 }, pb: { md: 18, xs: 2 } }} bgcolor="light.main">
            <Container>
                <Box sx={{ ml: 18, display: { md: "block", xs: "none" } }}>
                    <Image src={magicWandIcon} alt="" />
                </Box>
                <Typography sx={{ color: "text.primary", textAlign: "center", fontSize: { md: 33, xs: 26 }, mb: { md: 12, sm: 8, xs: 4 } }} variant='h2'>Our <Box component={"span"} sx={titleStyle}>Values</Box></Typography>
                <Grid container mb={6} spacing={3}>
                    {
                        values.map((card) => <IconCard card={card} key={card.id} />)
                    }
                </Grid>
                <Box sx={{ textAlign: "right", mr: 15, display: { md: "block", xs: "none" } }}>
                    <Image src={cubeRotate} alt="" />
                </Box>
            </Container >
        </Box >
    );
};

export default OurValues;