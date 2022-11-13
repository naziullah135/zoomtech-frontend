import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import feature from "./../../../assets/images/HomePage/feature.jpg";

const Title = ({ children }) => <Typography variant='h4' sx={{ fontSize: 16, color: "text.darkGray", mb: 3 }}>{children}</Typography>

const ListItem = ({ children, href = "/" }) => {
    return (
        <Box>
            <Typography variant='body2' sx={{
                position: "relative",
                pl: "12px",
                m: 1,
                display: "inline-block",
                '& a': {
                    color: "text.darkGray",
                    textDecoration: "none"
                },
                '&:before': {
                    position: "absolute",
                    top: 'calc(50% - 2px)',
                    left: 0,
                    content: '""',
                    height: 4,
                    width: 4,
                    borderRadius: '50%',
                    bgcolor: "text.darkGray",
                },
                '&:hover': {
                    '& a': {
                        color: "secondary.main"
                    },
                    '&:before': {
                        bgcolor: "secondary.main",
                    }
                },
            }}>
                <Link href={href}>{children}</Link>
            </Typography>
        </Box>
    )
}

const Learn = () => {
    return (
        <Box sx={{ width: 800, minHeight: 274, p: 5 }}>
            <Grid container spacing={4} pt={5}>
                <Grid item xs={3} sx={{ pt: "0 !important" }}>
                    <Title>Connect</Title>
                    <ListItem href="/about-us">About Us</ListItem>
                    <ListItem href="/contact-us">Contact Us</ListItem>
                    <ListItem href="/careers">Careers</ListItem>

                </Grid>
                <Grid item xs={4} sx={{ pt: "0 !important", borderRight: "2px solid  #F5F5F3", borderLeft: "2px solid  #F5F5F3" }}>
                    <Box ml={2} >
                        <Title>Resources</Title>
                        <ListItem href="/case-studies">Case Studies</ListItem>
                        <ListItem href="/blog">Blog</ListItem>
                    </Box>
                </Grid>
                <Grid item xs={5} sx={{ pt: "0 !important", display: "flex", justifyContent: "flex-end" }}>
                    <Box>
                        <Title>Featured</Title>
                        <Box>
                            <Image src={feature} alt="feature" />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Learn;