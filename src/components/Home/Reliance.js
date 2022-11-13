import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PrimaryButton from '../Custom/PrimaryButton';
import cubeIcon from "./../../assets/icons/homepage/noun-cube-4659247 1.svg";
import underLine from "./../../assets/icons/homepage/Vector 23.svg";
import manWithRocket from "./../../assets/icons/homepage/Frame.svg";
import magicWandIcon from "./../../assets/icons/homepage/noun-magic-wand-217915 1.svg";
import Image from 'next/image';
import Link from 'next/link';

const titleStyle = {
    color: "secondary.main",
    background: {
        md: `url("${underLine.src}") no-repeat bottom`
    },
    py: 1
}

const imageStyle = {
    textAlign: "center",
    '& .retouch': {
        maxWidth: '100%'
    },
    '& .magic': {
        mt: 3,
        ml: 5,
        display: { md: "block", xs: "none" }
    }
}

const Reliance = ({ isXsDevice }) => {
    return (
        <Box component={"section"} sx={{ py: 10 }}>
            <Container>
                <Grid container spacing={5}>
                    <Grid item md={6} xs={12}>
                        <Box sx={{ textAlign: "right", display: { md: "block", xs: "none" } }}><Image src={cubeIcon} alt="" /></Box>
                        <Typography sx={{ color: "text.primary", fontSize: { md: 33, xs: 26 }, }} variant='h2'>Scale With <Box component={"span"} sx={titleStyle}>Reliance</Box></Typography>
                        <Typography sx={{ color: "text.secondary", mb: 5, mt: 3 }} variant='subtitle1'>
                            Zoom Tech Street offers a complete range of professional image processing and 3D rendering solutions that can help you keep up with demand.
                            <br /> <br />
                            Improve quality, reduce the turnaround time, and save on costs by outsourcing to Zoom Tech Street. it&apos;s important to have a partner you can trust to deliver consistent results at a competitive price. That&apos;s what we&apos;re here for.
                        </Typography>
                        <Link href={"/about-us"} passHref>
                            <PrimaryButton fullWidth={isXsDevice}>Learn More</PrimaryButton>
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box sx={imageStyle}>
                            <Image className='retouch' src={manWithRocket} alt="retouch" />
                            <img className='magic' src={magicWandIcon.src} alt="" />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Reliance;