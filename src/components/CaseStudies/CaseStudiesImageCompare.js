import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ImageCompare from '../common/ImageCompare';

const CaseStudiesImageCompare = ({ doubleImageCompare }) => {
    const { title, description, img1, imgEdited1, img2, imgEdited2 } = doubleImageCompare;
    return (
        <Box bgcolor="light.main" py={8} mb={5}>
            <Container maxWidth="md">
                <Typography variant='h3'> {title}</Typography>
                <Typography variant='body1' my={3}> <span dangerouslySetInnerHTML={{ __html: description }}></span> </Typography>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <ImageCompare img1={img1} img2={imgEdited1} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <ImageCompare img1={img2} img2={imgEdited2} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CaseStudiesImageCompare;