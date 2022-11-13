import { Box, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { vacancyData } from '../../data/career.data';
import PrimaryButton from '../Custom/PrimaryButton';



const Vacancy = () => {
    return (
        <Box component={"section"} mt={-5}>
            <Container>
                <Typography sx={{ textAlign: "center", mb: 10, fontSize: { md: 33, xs: 26 } }} variant="h2">See our open <Box component={"span"} sx={{ color: "primary.main" }}>vacancy</Box></Typography>
                {
                    vacancyData.map(({ id, jobTitle, date, location, vacancy, link }) => (
                        <Box key={id} sx={{ bgcolor: "#FBFBFB", mb: 4, borderRadius: "5px", filter: 'drop-shadow(0px 6px 10px rgba(0, 0, 0, 0.05))' }}>
                            <Grid container spacing={0}>
                                <Grid item md={5} sm={7} xs={12} >
                                    <Box p={2}>
                                        <Typography variant='h4' sx={{ fontWeight: 500, mb: 1 }}>{jobTitle}</Typography>
                                        <Typography variant='body2' sx={{ color: "primary.main", fontWeight: 500 }}>{location}</Typography>
                                    </Box>
                                </Grid>
                                <Grid sx={{
                                    borderLeft: { sm: "1px solid #FC9823" },
                                    borderRight: { md: "1px solid #FC9823" },
                                    borderBlock: { xs: "1px solid #FC9823", sm: "none" },
                                    display: "flex",
                                    justifyContent: { xs: "flex-start", sm: "center" }
                                }} item md={4} sm={5} xs={12}>
                                    <Box p={2}>
                                        <Typography variant='body2' sx={{ color: "black", fontWeight: 500 }}>{date}</Typography>
                                        <Typography variant='body2' sx={{ color: "primary.main", fontWeight: 500 }}>No of vacancies: {vacancy}</Typography>
                                    </Box>
                                </Grid>
                                <Grid item md={3} xs={12} >
                                    <Box sx={{ display: "flex", justifyContent: { xs: "flex-end", sm: "center" }, p: 2 }}>
                                        <Link href={link} target="_blank">
                                            <PrimaryButton sx={{ borderRadius: "6px" }} iconLess>Apply Now</PrimaryButton>
                                        </Link>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    ))
                }
            </Container>
        </Box>
    );
};

export default Vacancy;