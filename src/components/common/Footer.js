import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Logo from './Logo';
import Link from 'next/link';
import { quickLinks, socialLinks } from '../../data/footer.data';



const Footer = () => {
    return (
        <Box component={"footer"} bgcolor="mercury.main" pt={4} pb={3}>
            <Container>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item md={3} xs={12}>
                        <Box sx={{ textAlign: { md: "left", xs: "center" } }}>
                            <Logo />
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Grid container spacing={2}>
                            {
                                quickLinks.map(({ id, label, path }) => (
                                    <Grid key={id} item sm={3} xs={4}>
                                        <Box sx={{ textAlign: { md: "left", xs: "center" }, '& a': { color: "text.primary", textDecoration: "none", transition: ".3s ease", '&:hover': { color: "secondary.main" } } }}>
                                            <Link href={path}>{label}</Link>
                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Box sx={{ textAlign: { md: "right", xs: "center" }, '& svg': { ml: 2, cursor: "pointer" } }}>
                            {
                                socialLinks.map(({ id, icon, url }) => (
                                    <Link key={id} href={url} target="_blank" passHref>
                                        {icon}
                                    </Link>
                                ))
                            }
                        </Box>
                    </Grid>
                </Grid>
                <Box>
                    <Typography sx={{ textAlign: "center", mt: 4 }} variant="subtitle2">&copy; 2018 - {new Date().getFullYear()} Zoom Tech Street</Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;