import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import unionIcon from "./../../assets/icons/homepage/Group 84.svg";
import doubleCube from "./../../assets/icons/homepage/Group (2).svg";
import arrow from "./../../assets/icons/homepage/Vector 28.svg";
import calque from "./../../assets/images/HomePage/clients/Calque.svg";
import jewelry from "./../../assets/images/HomePage/clients/jewelry-midas.svg";
import aeyde from "./../../assets/images/HomePage/clients/aeyde.svg";
import mannequin from "./../../assets/images/HomePage/Ghost-Mannequin-3-1 1.jpg";
import hazelnut from "./../../assets/images/HomePage/ROSA NAPPA LEATHER HAZELNUT 3 1.png";
import tsl from "./../../assets/images/HomePage/TSL.png";
import PrimaryButton from '../Custom/PrimaryButton';
import Image from 'next/image';
import Link from 'next/link';

const customerStories = [
    {
        id: "201",
        icon: calque,
        image: mannequin,
        path: "/case-studies/ccv"

    },
    {
        id: "202",
        icon: jewelry,
        image: tsl,
        path: "/case-studies/jewelry-medias"
    },
    {
        id: "203",
        icon: aeyde,
        image: hazelnut,
        path: "/case-studies/aeyde"
    },
]


const titleStyle = {
    width: "fit-content",
    fontSize: { md: 33, xs: 26 },
    mx: 'auto',
    '& .union': {
        mb: 2,
        display: {
            md: "inline-block",
            xs: "none"
        }
    },
    '& .highlight': {
        color: "secondary.main"
    }
}
const CustomerStories = () => {
    return (
        <Box component={'section'} sx={{ bgcolor: 'light.main', py: { md: 15, xs: 5 } }}>
            <Container>
                <Box sx={{ display: { md: "block", xs: "none" }, mb: -5, ml: 17 }}>
                    <Image src={doubleCube} alt="" />
                </Box>
                <Typography sx={titleStyle} variant='h2'>
                    <img className='union' src={unionIcon.src} alt="" />
                    Customer <Box component={'span'} className="highlight">Stories</Box>
                </Typography>
                <Box sx={{ textAlign: "right", mr: 18, display: { md: "block", xs: "none" } }}>
                    <Image src={arrow} alt="" />
                </Box>
                <Grid container spacing={3} sx={{ mt: { md: 9, xs: 3 } }}>
                    {
                        customerStories.map(({ id, icon, image, path }) => (
                            <Grid key={id} item md={4} xs={12}>
                                <Box sx={{ bgcolor: "Background", py: 6, px: 4, textAlign: "center" }}>
                                    <Box sx={{ height: 70 }}>
                                        <Image src={icon} alt="" />
                                    </Box>
                                    <Box sx={{ maxHeight: 180, maxWidth: 240, mx: "auto", mt: 5, mb: 8 }}>
                                        <Image src={image} alt="" />
                                    </Box>
                                    <Link href={path} passHref>
                                        <PrimaryButton>Read Story</PrimaryButton>
                                    </Link>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default CustomerStories;