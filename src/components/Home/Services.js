import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import unionIcon from "./../../assets/icons/homepage/Group 83.svg";
import Image from 'next/image';
import { services } from '../../data/home.data';
import IconCard from '../common/IconCard';




const titleStyle = {
    width: "fit-content",
    mx: 'auto',
    mb: 12,
    fontSize: { md: 33, xs: 26 },
    pl: {
        md: 5,
        xs: 0
    },
    '& .union': {
        mb: 2,
        display: { md: "inline-block", xs: "none" }
    }
}
const Services = () => {
    return (
        <Box component={'section'} sx={{ py: 10 }}>
            <Container>
                <Typography sx={titleStyle} variant='h2'>The <Box component={'span'} sx={{ color: 'secondary.main' }}>Services</Box> You Need<img className='union' src={unionIcon.src} alt="" />
                </Typography>
                <Grid container spacing={3}>
                    {
                        services.map((card) => <IconCard card={card} key={card.id} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;