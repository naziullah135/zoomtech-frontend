import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { simplifyProcess } from '../../../data/common.data';

const SimplifyProcess = () => {
    return (
        <Box component={"section"} pt={13}>
            <Container>
                <Typography variant='h2' sx={{ fontSize: { md: 33, xs: 26 }, textAlign: "center" }} >We Works to Simplify Your Processes</Typography>
                <Typography variant='body2' sx={{ fontSize: 15, textAlign: "center" }}>Relax and let us worry about image specs, deadlines, and quality.</Typography>
                <Grid container sx={{ mt: { md: 12, xs: 2 } }} spacing={3}>
                    {
                        simplifyProcess.map(({ id, icon, text }) => (
                            <Grid key={id} item md={3} xs={6}>
                                <Box sx={{ textAlign: "center", py: 4, px: { sm: 2, xs: 1 }, bgcolor: "light.main", height: "100%" }}>
                                    <Image src={icon} alt="" />
                                    <Typography variant='subtitle1' sx={{ fontWeight: 500, color: "text.darkGray", mt: 1 }}>{text}</Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default SimplifyProcess;