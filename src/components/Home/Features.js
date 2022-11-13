import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PrimaryButton from '../Custom/PrimaryButton';
import unionIcon from "./../../assets/icons/homepage/Group 83.svg";
import thumbnail from "./../../assets/icons/homepage/Group.svg";
import Image from 'next/image';
import { features, featuresCard } from '../../data/home.data';
import Link from 'next/link';
const titleStyle = {
    fontSize: { md: 33, xs: 26 },
    '& .union': {
        mb: 2,
        display: {
            lg: "inline-block",
            xs: "none"
        }
    }
}



const Feature = ({ feature }) => {
    const { percentage, title, description } = feature;
    return (
        <Box sx={{ bgcolor: "Background", p: '30px', borderRadius: '2px', mb: 3 }}>
            <Typography variant='h2' color={"secondary.main"}>{percentage}%</Typography>
            <Typography variant='h3' my={1}>{title}</Typography>
            <Typography variant='body2' >{description}</Typography>
        </Box>
    )
}

const Features = ({ isXsDevice }) => {
    return (
        <Box component={'section'} sx={{ bgcolor: 'light.main', py: { sm: 18, xs: 10 } }}>
            <Container>
                <Grid container spacing={{ sm: 3, xs: 0 }}>
                    <Grid item md={4} xs={12}>
                        <Box sx={{ mt: { sm: 10, xs: 1 } }}>
                            <Typography sx={titleStyle} variant='h2'><Box component={'span'} sx={{ color: 'secondary.main' }}>5,000+</Box> Images<img className='union' src={unionIcon.src} alt="" /> <br /> Processed Daily  </Typography>
                            <Typography sx={{ mt: 1, mb: 5 }} variant='body2'>Grow your business with one-stop
                                image editing &amp; 3D visual content solution company you can trust to save you time, money, and stress.</Typography>
                            <Link href={"/contact-us"} passHref>
                                <PrimaryButton fullWidth={isXsDevice}>Get Started</PrimaryButton>
                            </Link>
                            <Box sx={{ textAlign: "right", mr: 6, display: { md: "block", xs: "none" } }}>
                                <Image src={thumbnail} alt="" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12} sx={{ mt: { xs: 6 } }}>
                        <Feature feature={features[0]} />
                        <Feature feature={features[1]} />
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Box sx={{ mt: { md: 15, sm: 10, xs: 0 } }} >
                            <Feature feature={features[2]} />
                            <Typography variant='body2' color={"text.darkGray"}>Averages across all quantifiable industries. With the emphasis on the study of available data gathered from customer feedback that created a quantifiable outcome.</Typography>
                        </Box>
                    </Grid>
                    {
                        featuresCard.map(({ id, icon, title, description }) => (
                            <Grid key={id} item md={4} xs={12} sx={{ mt: { xs: 3 } }}>
                                <Box sx={{ p: 4, bgcolor: "lightYellow.main", height: '100%', textAlign: 'center', borderRadius: '2px', }}>
                                    <Image src={icon} alt="" />
                                    <Typography variant='h3' mt={3} mb={1}>{title}</Typography>
                                    <Typography variant='body2' color={"text.yellowGray"}>{description}</Typography>
                                </Box>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box >
    );
};

export default Features;