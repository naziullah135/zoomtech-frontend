import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import unionIcon from "./../../assets/icons/homepage/Group 84.svg";
import underLine from "./../../assets/icons/homepage/Vector 23.svg";
import shoes from "./../../assets/icons/homepage/noun-shoes-3368999 1.svg";
import mannequin from "./../../assets/icons/homepage/noun-mannequin-4592819 1.svg";
import furniture from "./../../assets/icons/homepage/noun-furniture-1164878 1.svg";
import marketPlace from "./../../assets/icons/homepage/noun-market-place-676606 1.svg";
import jewelry from "./../../assets/icons/homepage/noun-jewelry-4476484 1.svg";
import umbrella from "./../../assets/icons/homepage/noun-studio-umbrella-3148692 1.svg";
import wholeSale from "./../../assets/icons/homepage/noun-wholesale-4038376 1.svg";
import machine from "./../../assets/icons/homepage/noun-machine-4454439 1.svg";
import cube3D from "./../../assets/icons/homepage/noun-3d-68010 1.svg";
import thumbnail from "./../../assets/icons/homepage/Group 78.svg";
import Image from 'next/image';

const servedIndustries = [
    {
        id: "001",
        title: "Apparel & Footwear",
        icon: shoes
    },
    {
        id: "002",
        title: "Fashion Designers",
        icon: mannequin
    },
    {
        id: "003",
        title: "Furniture & Home Goods",
        icon: furniture
    },
    {
        id: "004",
        title: "Amazon & Marketplaces",
        icon: marketPlace
    },
    {
        id: "005",
        title: "Jewelry & Watches",
        icon: jewelry
    },
    {
        id: "006",
        title: "Agency & Studios",
        icon: umbrella
    },
    {
        id: "007",
        title: "Wholesaler & retailer",
        icon: wholeSale
    },
    {
        id: "008",
        title: "Appliances Manufacturers",
        icon: machine
    },
]


const titleStyle = {
    width: "fit-content",
    mx: 'auto',
    mb: 12,
    fontSize: { md: 33, xs: 26 },
    '& .union': {
        mb: 2,
        display: { md: "inline-block", xs: "none" }
    },
    '& .highlight': {
        color: 'secondary.main',
        background: `url("${underLine}")`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "bottom",
        py: 1
    }
}
const ServedIndustries = () => {
    return (
        <Box component={'section'} sx={{ py: 10 }}>
            <Container>
                <Box sx={{ ml: 13, display: { md: "block", xs: "none" } }}>
                    <Image src={cube3D} alt="" />
                </Box>

                <Box sx={{ textAlign: 'right', mb: '-75px', mr: 13, display: { md: "block", xs: "none" } }}>
                    <Image src={thumbnail} alt="" />
                </Box>
                <Typography sx={titleStyle} variant='h2'>
                    <img className='union' src={unionIcon.src} alt="" />
                    Industries <Box component={'span'} className="highlight">We Serve</Box>
                </Typography>
                <Grid container spacing={{ sm: 3, xs: 2 }}>
                    {
                        servedIndustries.map(({ id, title, icon }) => (
                            <Grid key={id} item lg={3} md={4} sm={6} xs={6}>
                                <Box component={'div'} sx={{ p: { sm: '30px', xs: 1 }, height: "100%", backgroundColor: "light.main", textAlign: 'center' }}>
                                    <Box sx={{ height: 32 }}>
                                        <Image src={icon} alt="" />
                                    </Box>
                                    <Typography variant='h4' sx={{ mt: '20px', fontSize: { sm: 15, xs: 14 } }}>{title}</Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default ServedIndustries;