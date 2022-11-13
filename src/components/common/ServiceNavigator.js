import { Box, Button, Container } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { servicePages } from '../../data/common.data';

const ServiceNavigator = () => {
    const { pathname } = useRouter();
    return (
        <Box sx={{ display: { md: "block", xs: "none" } }} component={"nav"} bgcolor="light.main">
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #D9D9D9", pb: 2 }}>
                    {
                        servicePages.map(({ id, title, path }) => (
                            <Link key={id} href={path}>
                                <Button sx={{ textTransform: "capitalize", px: 0, borderTop: "2px solid", borderTopColor: pathname === path ? "primary.main" : "transparent", borderRadius: 0, color: pathname === path ? "primary.main" : "text.darkGray", '&:hover': { color: "primary.main", borderTopColor: "primary.main" } }} key={id} >
                                    {title}
                                </Button>
                            </Link>
                        ))
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default ServiceNavigator;