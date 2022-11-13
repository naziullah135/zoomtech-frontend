import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ImageCompare from '../common/ImageCompare';
import HRDivider from '../Custom/HRDivider';

const CCVBottom = ({ singleImageCompare }) => {
    const { img, imgEdited } = singleImageCompare;
    return (
        <Box>
            <Container maxWidth="md">
                <Typography variant='h3'> Speed and Trust</Typography>
                <Typography variant='body1' my={3}> At CCV, we are always looking to take our performance to the next level. When they approached us with the challenge of handling a large volume of workloads (500-1000 images per day), we knew we could rise to the occasion.
                    <br /><br />
                    Following instructions properly and maintaining consistency is key for any project, especially when the volume is high. We are proud to say that we met CCV&apos;s expectations in this area, and were even able to handle urgent requests within the 3-6 hour timeframe they required. </Typography>
                <HRDivider />
                <Typography variant='h3'> Strategy:</Typography>
                <Typography variant='body1' mt={3} mb={5}>
                    After reviewing the data we collected, we brainstormed the most common issues and came up with a new game plan for their contents. We found out that we needed more designers with expertise to handle the extra work, so we introduced a three-step quality assurance procedure to eliminate as many errors as possible.
                    <br /> <br />
                    This way, we could make sure any feedback from CCV was taken into consideration and effective immediately. Thanks to this strategy, our brand was able to build a stronger identity and reach more customers.
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item md={8} xs={12}>
                        <ImageCompare img1={img} img2={imgEdited} />
                    </Grid>
                </Grid>
                <HRDivider sx={{ mt: 12 }} />
                <Typography variant='h3'> CCV And Zoom Tech Street</Typography>
                <Typography variant='body1' mt={3}>
                    &quot;Zoom Tech Street&apos;s three-step quality assurance procedure is the most appealing thing about the platform. It&apos;s easy to use and gives a great level of insight. I think the best thing about working together is reliability and also flexibility from where we started to what we&apos;re doing now. <br /> <br />
                    Zoom Tech Street is doing so much more for us now, but I also can ask when I can&apos;t figure something out, and you&apos;ll get back to me. If it&apos;s something else, you&apos;ll see if you can build it out for me. And the turnaround time is so quick too.&quot;
                </Typography>
            </Container>
        </Box>
    );
};

export default CCVBottom;