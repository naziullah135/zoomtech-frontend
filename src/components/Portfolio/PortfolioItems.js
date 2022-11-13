import { Box, Container, Grid, Tab, Tabs } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import { portfolio } from '../../data/portfolio.data';



const PortfolioItems = () => {
    const [value, setValue] = useState(0);

    const handleChange = (_event, newValue) => {
        setValue(newValue);
    };
    const categories = ["all", "image-editing", "cgi"];
    return (
        <Box>
            <Container>
                <Box mt={7}>
                    <Tabs sx={{
                        '& .MuiTab-root': {
                            fontSize: 19,
                            color: "text.darkGray",
                            textTransform: "capitalize",
                            p: 1,
                            mx: 1,
                            minWidth: "unset",
                            // '&.Mui-selected': {
                            //     color: "secondary.main"
                            // }
                        },
                    }}
                        value={value}
                        onChange={handleChange}
                        centered>
                        <Tab label="All" />
                        <Tab label="Image Editing" />
                        <Tab label="CGI / 3D" />
                    </Tabs>
                    <Grid container mt={4} spacing={3}>
                        {
                            portfolio
                                .filter(({ category }) => (categories[value] === "all") || (categories[value] === category))
                                .map(({ id, image }) => (
                                    <Grid item md={4} sm={6} xs={12} key={id}>
                                        <Box sx={{
                                            height: "98%",
                                            boxShadow: "0px 8px 15px rgba(49, 49, 49, 0.05)",
                                            //  bgcolor: "#F5F5F3", 
                                            //  borderRadius: "2px" 
                                        }}>
                                            <Image src={image} alt="" />
                                        </Box>
                                    </Grid>
                                ))
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default PortfolioItems;