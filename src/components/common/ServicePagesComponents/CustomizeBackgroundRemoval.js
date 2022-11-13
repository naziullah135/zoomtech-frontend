import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CustomizeBackgroundRemoval = ({ cardData }) => {
    return (
        <Box component={"section"} sx={{ mt: 18, mb: 10 }}>
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", maxWidth: "480px", mx: "auto", fontSize: { md: 33, xs: 26 } }}><Box component={"span"} color="secondary.main">Customize</Box>  Your
                    Background Removal Service</Typography>
                <Typography variant='subtitle1' sx={{ textAlign: "center", maxWidth: "526px", mx: "auto", mt: 2, mb: 10 }}>Customizing your photo background removal service with Zoom Tech
                    Street is easy and gives you complete control over the final results.</Typography>
                <Grid container spacing={3}>
                    {
                        cardData.map(({ id, icon, title, listItems }) => (
                            <Grid key={id} item md={4} xs={12}>
                                <Box sx={{ bgcolor: "#FFE79E", height: "100%", textAlign: "center", p: 5, borderRadius: "2px" }}>
                                    <Image src={icon} alt="" />
                                    <Typography variant='h3' sx={{ mt: 2, mb: 1 }}>{title}</Typography>
                                    <Box sx={{ textAlign: "left", width: "fit-content", mx: "auto" }}>
                                        {
                                            listItems.map(item => (
                                                <Typography variant='body2' key={item}>• {item}</Typography>
                                            ))
                                        }
                                    </Box>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default CustomizeBackgroundRemoval;