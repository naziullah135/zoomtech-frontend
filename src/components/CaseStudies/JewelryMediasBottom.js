import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ImageCompare from '../common/ImageCompare';
import HRDivider from '../Custom/HRDivider';

const JewelryMediasBottom = ({ singleImageCompare }) => {
    const { img, imgEdited } = singleImageCompare;
    return (
        <Box>
            <Container maxWidth="md">
                <Typography variant='h3'> Clear-sightedness</Typography>
                <Typography variant='body1' my={3}>
                    First of all, we took a look at their current statistics. Here’s the data we collected after a quick analysis-
                    <br />
                    <Box sx={{ color: "text.darkGray", fontWeight: 500, lineHeight: 2 }}>
                        <ul>
                            <li>Initially they were only able to deal with 30-120 images a day for small projects.</li>
                            <li>As they were getting a lot of orders, it was a bit difficult for them to maintain the quality of the contents</li>
                            <li>Delivering the huge amount of contents on time was a challenge</li>
                        </ul>
                    </Box>
                    After reviewing the insights and comparing them with the objectives, we realized achieving the desired results would be challenge. Never one to shy away from a challenge, we put our best efforts in coming up with a strategy that would work.
                </Typography>
                <HRDivider />
                <Typography variant='h3'> Proposed action:</Typography>
                <Typography variant='body1' mt={3} mb={5}>
                    Our brand building strategy revolved around a few core initiatives. We brainstormed the most common issues after reviewing the data we collected, and came up with a new game plan for their contents.
                    <Box sx={{ color: "text.darkGray", fontWeight: 500, lineHeight: 2, mt: 3 }}>
                        We found out that we needed-
                        <ul>
                            <li>More designers with expertise to handle the extra works</li>
                            <li>To introduce three-step quality assurance procedure to eliminate as much errors as possible</li>
                        </ul>
                    </Box>
                    To make sure any feedback from Jewelry Medias were taken into consideration and effective  immediately
                </Typography>
                <Grid container justifyContent="center">
                    <Grid item md={8} xs={12}>
                        <ImageCompare img1={img} img2={imgEdited} />
                    </Grid>
                </Grid>
                <Typography variant='h3' sx={{ mt: 12 }}> Execution</Typography>
                <Typography variant='body1' mt={3}>
                    After we had our plan in place, we execution was key. We took the following steps to make sure everything ran smoothly:
                    <Box sx={{ color: "text.darkGray", fontWeight: 500, lineHeight: 2 }}>
                        <ul>
                            <li>Hired new designers and trained them within 3 weeks to support the growing volume of work for Jewelry Medias</li>
                            <li>Dedicated a team of 10 people for smooth delivery</li>
                            <li>Checked files thoroughly in 3 steps – by the production manager, then the QC manager before delivering it to the client</li>
                        </ul>
                    </Box>
                    Assigned the training production team to get the work done in a short time while maintain-ing accuracy, so that same team could handle 30% extra workload during peak season. By taking these steps, we were able to effectively execute our plan and meet our goals.
                </Typography>
                <HRDivider />
                <Typography variant='h3'> Results:</Typography>
                <Typography variant='body1' mt={3}>
                    Zoom Tech Street&apos;s workforce proved to be speedy and efficient, able to deliver every project within the timeframe of 18-24 hours. We&apos;re proud to say that our work has helped Jewelry Medias improve their business in a big way.
                    <br /><br />
                    We were able to follow all the instructions given for each job properly, which resulted in happy clients who continued to work with us. Our quality of work improved by 90%, and the number of errors reduced from 8% to 3%. This was an amazing result for our clients, who were able to reduce their workload by 95%.  We&apos;re proud of the work we did for Jewelry Medias and will continue to strive for similar results in the future.
                    <br /> <br />
                    They were so happy with our work that they continued to assign us new projects. We&apos;re grateful for their trust andwe&apos;ll continue to do our best to help them grow their business even further.
                </Typography>
            </Container>
        </Box>
    );
};

export default JewelryMediasBottom;