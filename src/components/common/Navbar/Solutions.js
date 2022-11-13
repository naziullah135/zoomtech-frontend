import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { solutions } from '../../../data/home.data';

const Solutions = () => {
    return (
        <Box sx={{ width: 600, minHeight: 248, py: 3, px: 9 }}>
            <Grid container spacing={3}>
                {
                    solutions.map(({ label, listItem }) => (
                        <Grid key={label} item xs={6}>
                            <Typography variant='body1' sx={{ fontWeight: 600, ml: 3, mb: 3 }}>{label}</Typography>
                            {
                                listItem.map(({ id, title, path, icon }) => (
                                    <Box key={id} sx={{ display: "flex", alignItems: "center", my: 2 }}>
                                        <Box sx={{ width: 25, height: 25, mr: 3 }}>
                                            <Image src={icon} alt="" />
                                        </Box>
                                        <Typography variant='body2' sx={{ '& a': { color: "text.darkGray", textDecoration: "none", '&:hover': { color: "secondary.main" } } }}>
                                            <Link href={path}>{title}</Link>
                                        </Typography>
                                    </Box>
                                ))
                            }
                        </Grid>
                    ))
                }
            </Grid>
            <Typography variant='subtitle2' sx={{ textAlign: "center", mt: 3, '& a': { color: "primary.main", textDecoration: "none" } }}>
                <Link href="/services">
                    See all Zoom Tech Street Services
                </Link>
            </Typography>

        </Box>
    );
};

export default Solutions;