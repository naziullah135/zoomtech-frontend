import { Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const IconCard = ({ card }) => {
    const { title, description, icon } = card;
    return (
        <Grid item md={4} sm={6} xs={6}>
            <Paper variant='outlined' sx={{ p: '30px', height: "100%", textAlign: { sm: "left", xs: "center" } }}>
                <Image src={icon} alt="" />
                <Typography variant='h4' sx={{ mt: '30px', mb: "10px", color: { sm: "text.primary", xs: "text.darkGray" }, fontWeight: { sm: 600, xs: 500 }, fontSize: { sm: 19, xs: 15 } }}>{title}</Typography>
                <Typography variant='body2' sx={{ display: { sm: 'block', xs: 'none' } }}>{description}</Typography>
            </Paper>
        </Grid>
    );
};

export default IconCard;