import { Box, ListItem, ListItemButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { solutions } from '../../../data/home.data';

const SolutionsMobile = () => {
    return (
        <>
            {
                solutions.map(({ listItem }) => (
                    <>
                        {
                            listItem.map(({ id, title, path, icon }) => (
                                <Link key={id} href={path} passHref>
                                    <ListItem disablePadding>
                                        <ListItemButton >
                                            <Box key={id} sx={{ display: "flex", alignItems: "center", my: 1 }}>
                                                <Box sx={{ width: 20, height: 20, mr: 2 }}>
                                                    <Image src={icon} alt="" />
                                                </Box>
                                                <Typography variant='body2' sx={{ '& a': { color: "text.darkGray", textDecoration: "none", '&:hover': { color: "secondary.main" } } }}>
                                                    {title}
                                                </Typography>
                                            </Box>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))
                        }
                    </>

                ))
            }
            <Typography variant='subtitle2' sx={{ textAlign: "center", mt: 3, '& a': { color: "primary.main", textDecoration: "none" } }}>
                <Link href="/services">
                    See all Zoom Tech Street Services
                </Link>
            </Typography>

        </>
    );
};

export default SolutionsMobile;