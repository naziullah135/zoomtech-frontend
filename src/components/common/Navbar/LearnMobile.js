import { Box, ListItemText, ListItem, ListItemButton, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import NestedMenu from './NestedMenu';
import feature from "./../../../assets/images/HomePage/feature.jpg";
import Image from 'next/image';

const MenuItem = ({ children, href }) => {
    return (
        <Link href={href} passHref>
            <ListItem disablePadding>
                <ListItemButton >
                    <ListItemText sx={{ color: 'text.darkGray', textAlign: "center" }}>{children}</ListItemText>
                </ListItemButton>
            </ListItem>
        </Link>
    )
}

const LearnMobile = () => {
    return (
        <>
            <NestedMenu label={"Connect"}>
                <MenuItem href="/about-us">About Us</MenuItem>
                <MenuItem href="/contact-us">Contact Us</MenuItem>
                <MenuItem href="/careers">Careers</MenuItem>
            </NestedMenu>
            <NestedMenu label={"Resources"}>
                <MenuItem href="/case-studies">Case Studies</MenuItem>
                <MenuItem href="/blog">Blog</MenuItem>
            </NestedMenu>
            <NestedMenu label={"Featured"}>
                <Box>
                    <Image src={feature} alt="feature" />
                </Box>
            </NestedMenu>
            {/* <Box>
                <Typography>Featured</Typography>
                <Box>
                    <Image src={feature} alt="feature" />
                </Box>
            </Box> */}
        </>
    );
};

export default LearnMobile;