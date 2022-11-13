import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import ImageCompare from '../common/ImageCompare';
import PrimaryButton from '../Custom/PrimaryButton';

const SingleServiceItem = ({ service, index }) => {
    const { img1, img2, title, description, listTitle, listItems, path } = service;
    const isSmDevice = useMediaQuery(theme => theme.breakpoints.down("md"))
    return (
        <Box sx={{ mt: 12 }}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12} order={{ md: index % 2 === 0 ? 1 : 2, xs: 2 }}>
                        <ImageCompare img1={img1} img2={img2} />
                    </Grid>
                    <Grid item md={6} xs={12} order={{ md: index % 2 === 0 ? 2 : 1, xs: 1 }}>
                        <Typography variant='h2' sx={{ fontSize: { md: 33, xs: 21 } }} mb={1}>{title}</Typography>
                        <Typography variant='subtitle1' sx={{ color: "text.secondary", mb: 3 }}> <span dangerouslySetInnerHTML={{ __html: description }}></span> </Typography>
                        <Typography variant='subtitle1' sx={{ fontWeight: 500 }}>{listTitle}</Typography>
                        {
                            listItems && listItems.map((item, i) => (
                                <Box key={i} sx={{ display: "flex", alignItems: "center", mt: 2 }}>
                                    <svg width="24" height="24" fill="#63AC43" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM9.0489 13.8975C9.43867 14.2754 10.0588 14.2733 10.446 13.8928L16.8582 7.59062C17.1925 7.26209 17.7278 7.26025 18.0643 7.58648C18.4128 7.92429 18.4144 8.48285 18.068 8.82271L10.446 16.2997C10.0587 16.6797 9.43907 16.6815 9.04956 16.3038L5.63945 12.9973C5.28953 12.658 5.28954 12.0965 5.63949 11.7573C5.97447 11.4325 6.50682 11.4325 6.84178 11.7573L9.0489 13.8975Z" />
                                    </svg>
                                    <Typography variant='body2' sx={{ fontSize: 14, ml: 1 }}>{item}</Typography>
                                </Box>
                            ))
                        }
                        {
                            !isSmDevice && <Box sx={{ mt: 3 }}>
                                <Link href={path} passHref>
                                    <PrimaryButton>Explore More</PrimaryButton>
                                </Link>
                            </Box>
                        }
                    </Grid>
                    {
                        isSmDevice &&
                        <Grid item xs={12} order={3}>
                            <Box sx={{ mt: 3 }}>
                                <Link href={path} passHref>
                                    <PrimaryButton>Explore More</PrimaryButton>
                                </Link>
                            </Box>
                        </Grid>
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default SingleServiceItem;