import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import unionIcon from "./../../assets/icons/homepage/Group 85.svg";
import img1 from "./../../assets/images/About/how-start-1.jpg";
import img2 from "./../../assets/images/About/how-start-2.JPG";
import img3 from "./../../assets/images/About/how-start-3.JPG";
import imgMobile from "./../../assets/images/About/how-start-mobile.jpg";
import cube3dIcon from "./../../assets/images/About/noun-3d-cube.svg"
import cropIcon from "./../../assets/images/About/noun-crop.svg"
const AllStarted = () => {
    const isXsDevice = useMediaQuery(theme => theme.breakpoints.down("sm"))
    return (
        <Box component={"section"} mt={-4} mb={4} sx={{ pb: { md: 12, xs: 6 } }}>
            <Container>
                <Grid container spacing={4}>
                    {
                        !isXsDevice &&
                        <Grid item md={6} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item sm={6} xs={12}>
                                    <Box>
                                        <Image alt="" src={img1} />
                                    </Box>
                                    <Box mt={3}>
                                        <Image alt="" src={img2} />
                                    </Box>
                                </Grid>
                                <Grid item sm={6} xs={12}>
                                    <Box mt={16}>
                                        <Box sx={{ textAlign: "right", mr: -4 }}>
                                            <Image alt="" src={unionIcon} />
                                        </Box>
                                        <Image alt="" src={img3} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                    <Grid item md={6} xs={12}>
                        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                            <Box sx={{ textAlign: "center", display: { md: "block", xs: "none" } }}>
                                <Image alt="" src={cropIcon} />
                            </Box>
                            <Box>
                                <Typography variant='h2' sx={{ fontSize: { md: 33, xs: 26 }, mb: 2 }}> How It All <Box component={"span"} sx={{ color: "secondary.main" }}>Started</Box> </Typography>
                                <Typography variant='body2'>
                                    We are an image editing &amp; 3D visual content solution company, established in 2018 in a southeast Asian country called Bangladesh. We are a rapidly growing Design Agency with 5 years of experience providing service to customers like you with goodwill and success.
                                    <br /><br />
                                    We believe providing you with support is as important as serving you with timely and qualitatively end-to-end solutions.

                                </Typography>
                            </Box>
                            <Box sx={{ display: { md: "block", xs: "none" } }}>
                                <Image alt="" src={cube3dIcon} />
                            </Box>
                        </Box>
                    </Grid>
                    {
                        isXsDevice &&
                        <Grid item md={6} xs={12}>
                            <Box>
                                <Image alt="" src={imgMobile} />
                            </Box>
                        </Grid>
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default AllStarted;