import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import requirement from "./../../assets/icons/homepage/noun-requirement-review-2715253 1.svg";
import gift from "./../../assets/icons/homepage/noun-gift-19558 1.svg";
import customize from "./../../assets/icons/homepage/noun-customize-4755620 1.svg";
import delivery from "./../../assets/icons/homepage/noun-delivery-3173491 1.svg";
import PrimaryButton from '../Custom/PrimaryButton';
import arrow from "./../../assets/icons/homepage/Vector 29.svg";
import shape2 from "./../../assets/icons/homepage/Shape 2.svg";
import shape3 from "./../../assets/icons/homepage/Shape 3.svg";
import Image from 'next/image';
import Link from 'next/link';
const data = [
    {
        id: "101",
        title: "Share Requirements",
        description: "we are always prepared and on track to meet the deadline of the client. Schedule a short call with our product specialists to share your standards.",
        icon: requirement
    },
    {
        id: "102",
        title: "Receive Free Test",
        description: "No commitment is required to receive your free professionally  photos.",
        icon: gift
    },
    {
        id: "103",
        title: "Get a Custom Solution",
        description: "Our product specialists will help you build a custom solution to meet your e-commerce needs.",
        icon: customize
    },
    {
        id: "104",
        title: "Test & Deliver",
        description: "When the project is accomplished it’s time to validate the contents, designs, and operation. We rapidly test the project before delivery.",
        icon: delivery
    }
]
const styles = {
    position: "relative",
    '&:before': {
        lg: {
            content: '""',
            width: "150px",
            height: "150px",
            position: "absolute",
            backgroundImage: `url("${shape2.src}")`,
            backgroundRepeat: "no-repeat",
            top: -20,
            left: -50,
            zIndex: -1
        }
    },
    '&:after': {
        lg: {
            content: '""',
            width: "150px",
            height: "150px",
            position: "absolute",
            backgroundImage: `url("${shape3.src}")`,
            backgroundRepeat: "no-repeat",
            right: -60,
            bottom: -50,
            zIndex: -1
        }
    }
}
const GettingStart = ({ isXsDevice }) => {
    return (
        <Box component={'section'} sx={{ overflowX: "hidden", py: { sm: 18, xs: 10 } }} >
            <Container>
                <Typography variant='h2' sx={{ fontSize: { md: 33, xs: 26 }, textAlign: { sm: "center", xs: "left" } }} mb={7}>Getting <Box component={'span'} color="primary.main">Started</Box> With Zoom Tech Street</Typography>
                <Box sx={{ display: { lg: "flex", xs: "none" }, justifyContent: "space-evenly", mb: 1 }}>
                    <Image src={arrow} alt="" />
                    <Image src={arrow} alt="" />
                    <Image src={arrow} alt="" />
                </Box>
                <Box sx={styles}>
                    <Grid container spacing={3}>
                        {
                            data.map(({ id, title, description, icon }) => (
                                <Grid item key={id} lg={3} md={6} xs={12}>
                                    <Paper variant='outlined' sx={{ p: "20px", height: '100%' }}>
                                        <Image src={icon} alt="" />
                                        <Typography variant='h4' mt={2} mb={1}>{title}</Typography>
                                        <Typography variant='body2'>{description}</Typography>
                                    </Paper>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
                <Box sx={{ textAlign: "center", mt: 5 }}>
                    <Link href={"/contact-us"} passHref>
                        <PrimaryButton fullWidth={isXsDevice}>Start Free Trial</PrimaryButton>

                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default GettingStart;