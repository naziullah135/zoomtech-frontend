import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ImageCompare from '../common/ImageCompare';
import HRDivider from '../Custom/HRDivider';

const AeydeBottom = ({ singleImageCompare }) => {
    const { img, imgEdited } = singleImageCompare;
    return (
        <Box>
            <Container maxWidth="md">
                <Typography variant='h3'> Getting better clients with better communication</Typography>
                <Typography variant='body1' my={3}>
                    As with any initial relationship, aeyde and Zoom Tech Street worked together in the beginning to understand the requirements of the job and any specific techniques or issues that they had faced. To help with this, Karolina created a guide to support the collaboration.
                    <br /> <br />
                    &quot;I did a retouching guide with all the call-outs, including what to do in terms of visible nipples or facial scarring, calluses on toes or blisters, etc. We set it out in a RETOUCH NOTES so that it was clear to the person who was retouching what we wanted and what we expected.&quot;
                    <br /> <br />
                    Karolina is a big fan of natural-looking images, and she was very specific about wanting the team to keep the textures and colors as natural as possible. &quot;We keep the texture natural. We want a natural look overall, just without blemishes or acne. We also have a specific color background.&quot;
                    <br /> <br />
                    She wants the images to be consistent with each other. By sharing her thoughts and expectations, the team was quick to understand what was important to Karolina and ensure everyone was on the same page. This helped create a great end product that both Karolina and the team were happy with.
                </Typography>
                <HRDivider />
                <Typography variant='h3'> Effectiveness with efficiency</Typography>
                <Typography variant='body1' mt={3} mb={5}>
                    When it comes to retouching, aeyde knows that time is of the essence. With thousands of shots to complete, they needed to find a way to save time without sacrificing quality. Zoom Tech Street was the perfect solution. Knowing that I can share the load with Zoom tech Street and trust that the quality will be just as good as if I&apos;d done it myself is a huge relief.
                    <br /> <br />
                    Zoom Tech Street has allowed aeyde to focus on what they do best - creating beautiful products. And with the time they&apos;ve saved, they can now take on even more projects and continue to grow their business.
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item md={8} xs={12}>
                        <ImageCompare img1={img} img2={imgEdited} />
                    </Grid>
                </Grid>
                <HRDivider sx={{ mt: 12 }} />
                <Typography variant='h3'> Aeyde And Zoom Tech Street</Typography>
                <Typography variant='body1' mt={3}>
                    Zoom Tech Street is a great option for those who need fast turnaround times. The company offers a standardized set of services that are sure to meet your needs. In addition, Zoom Tech Street goes above and beyond the standard to provide you with the best possible service. You can trust that you will be satisfied with the work you receive.
                </Typography>
            </Container>
        </Box>
    );
};

export default AeydeBottom;