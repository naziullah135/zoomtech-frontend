import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PrimaryButton from '../../src/components/Custom/PrimaryButton';
import notFound from "./../../src/assets/images/not-found/not-found.png"
const NotFound = () => {
    return (
        <Box component={"main"} sx={{ minHeight: "calc(100vh - 190px)" }}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={5} sm={6} xs={12} sx={{ display: "flex", alignItems: "center" }}>
                        <Box>
                            <Typography variant='h1'>Ohh! nooooooo</Typography>
                            <Typography variant='h2' my={5}>Page not found</Typography>
                            <Link href={"/"}>
                                <PrimaryButton>Home page</PrimaryButton>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item md={7} sm={6} xs={12}>
                        <Box>
                            <Image src={notFound} alt="not-found" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NotFound;