import { Box, Divider, Paper, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../../Custom/PrimaryButton';


const styles = {
    boxShadow: "0px 6px 10px rgba(71, 70, 70, 0.05)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 3,
    minHeight: 328,
}

const ServiceItem = ({ title, price, total }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 2 }}>
            <Typography variant='body1'>{title}</Typography>
            <Typography variant='body1' sx={{ fontWeight: 600, color: total ? "primary.main" : "secondary.main" }}>€{price}</Typography>
        </Box>
    )
}

const PricingCard = ({ selectedService, getTotalPrice, name, initialPrice }) => {
    return (
        <Paper sx={styles} elevation={0} >
            <Box>
                <ServiceItem title={`${name} Price From`} price={initialPrice} />
                <Divider />
                {
                    selectedService.map(({ id, title, price }) => <ServiceItem title={title} price={price} key={id} />)
                }
            </Box>

            <Box>
                <Divider />
                <ServiceItem title={name === "Image" ? "Total per image" : "Total"} price={getTotalPrice()} total />
                <Box mt={5}>
                    <Link href={"/contact-us"} passHref>
                        <PrimaryButton fullWidth>Get started</PrimaryButton>
                    </Link>
                </Box>
            </Box>
        </Paper>
    );
};

export default PricingCard;