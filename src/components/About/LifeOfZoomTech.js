import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import unionIcon from "./../../assets/icons/homepage/Group 84.svg";
import thumbnail from "./../../assets/icons/homepage/Group 78.svg";
const titleStyle = {
    width: "fit-content",
    mx: 'auto',
    fontSize: { md: 33, xs: 26 },
    mb: { md: 12, xs: 6 },
    '& .union': {
        mb: 2,
        display: { md: "inline-block", xs: "none" }
    }
}
const LifeOfZoomTech = ({ images }) => {
    return (
        <Box component={"section"} sx={{ py: { md: 15, xs: 7 } }}>
            <Container>
                <Box sx={{ display: { md: "block", xs: "none" }, ml: 10 }}>
                    <Image src={thumbnail} alt="" />
                </Box>
                <Typography sx={titleStyle} variant='h2'>
                    <img className='union' src={unionIcon.src} alt="" />
                    <Box component={'span'} sx={{ color: 'secondary.main' }}>Life</Box> at Zoom Tech Street
                </Typography>
                <Grid container rowSpacing={{ sm: 2, xs: 0 }} columnSpacing={{ sm: 3, xs: 1 }}>
                    {
                        images.map(({ img, column }, i) => (
                            <Grid key={i} item xs={column}>
                                <Box sx={{ textAlign: "center" }}>
                                    <Image loading='lazy' src={img} alt="" />
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default LifeOfZoomTech;