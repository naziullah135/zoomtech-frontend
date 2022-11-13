import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';




const SingleItem = ({ item, handleToggleService, selectedService }) => {
    const { id, title, price } = item;
    const isSelected = !!selectedService.find(item => item.id === id)
    const styles = {
        cursor: "pointer",
        boxShadow: "0px 6px 10px rgba(71, 70, 70, 0.05)",
        textAlign: "center",
        minHeight: 152,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        p: 3,
        border: "2px solid",
        borderColor: ` ${isSelected ? "#63AC43" : "transparent"}`
    }

    return (
        <Grid item lg={4} md={6} xs={6}>
            <Paper elevation={0}
                sx={styles}
                onClick={() => handleToggleService({ id, title, price })}>
                <Typography variant='body1' sx={{ fontWeight: 500, color: "text.darkGray", fontSize: { sm: 16, xs: 14 } }}>{title}</Typography>
                <Typography color={isSelected ? "secondary.main" : "text.darkGray"} variant='h4'>€{price}</Typography>
            </Paper>
        </Grid>
    );
};

export default SingleItem;