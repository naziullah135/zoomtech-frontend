import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import unionIcon from "./../../../assets/icons/homepage/Group 85.svg";
import ImageCompare from '../ImageCompare';
import Image from 'next/image';

const rootStyle = {
    mt: -6,
    mb: 6,
}

const titleStyle = {
    textAlign: "center",
    mb: 2,
    ml: 5,
    '& .union': {
        mb: 2,
        display: {
            md: "inline-block",
            xs: "none"
        }
    }
}

const InvisibleMannequinWorkInAction = ({ data }) => {
    const { subTitle, images } = data;
    return (
        <Box sx={rootStyle} component={"section"}>
            <Container>
                <Typography variant='h2' sx={titleStyle}>Our Work in <Box component={"span"} sx={{ color: "primary.main" }}>Action</Box><img className='union' src={unionIcon.src} alt="" /></Typography>
                <Typography sx={{ mb: 12, textAlign: "center" }}>{subTitle}</Typography>
                <Grid container spacing={3}>
                    {
                        images.map((img, i) => (
                            <Grid key={i} item md={4} sm={6} xs={12}>
                                <Box sx={{ bgcolor: "ultraLight.main", maxHeight: "98%" }}>
                                    <Image src={img} />
                                </Box>
                            </Grid>
                        ))
                    }

                </Grid>
            </Container>
        </Box>
    );
};

export default InvisibleMannequinWorkInAction;