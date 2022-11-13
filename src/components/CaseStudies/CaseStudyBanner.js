import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import BannerWrapper from '../common/BannerWrapper';
import magicWandIcon from "./../../assets/images/About/values/noun-magic-wand-217915 3.svg";
import cube3dIcon from "./../../assets/images/About/noun-3d-cube.svg"
const CaseStudyBanner = ({ banner }) => {
    const {
        image,
        about,
        Heading,
        client,
        vertical,
        founded,
        HQ,
        zoomHelp,
        clientName,
        clientImage,
        clientQuote,
        clientBg
    } = banner;

    return (
        <>
            <BannerWrapper sx={{ pb: 22, mt: 5 }}>
                <Container>
                    <Grid container spacing={7}>
                        <Grid item md={6} xs={12} order={{ md: 1, xs: 2 }}>
                            <Box sx={{ bgcolor: "Background" }}>
                                <Image src={image} alt="" />
                                <Box p={3}>
                                    <Typography variant='h4' color="primary.main">About</Typography>
                                    <Typography variant='body2'>
                                        <span dangerouslySetInnerHTML={{ __html: about }}></span>
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} order={{ md: 2, xs: 1 }}>
                            <Box sx={{ mt: { md: 10, xs: 0 } }}>
                                <Heading />
                                <Typography variant='subtitle1' mt={2}>
                                    <Box component={"span"} sx={{ fontWeight: 500, mb: 1 }}>Client:</Box> <Box component={"span"} sx={{ color: "text.darkGray" }}>{client}</Box> <br />
                                    <Box component={"span"} sx={{ fontWeight: 500, mb: 1 }}>Vertical:</Box> <Box component={"span"} sx={{ color: "text.darkGray" }}>{vertical}</Box> <br />
                                    <Box component={"span"} sx={{ fontWeight: 500, mb: 1 }}>Founded:</Box> <Box component={"span"} sx={{ color: "text.darkGray" }}>{founded}</Box> <br />
                                    <Box component={"span"} sx={{ fontWeight: 500, mb: 1 }}>HQ:</Box> <Box component={"span"} sx={{ color: "text.darkGray" }}>{HQ}</Box> <br />
                                    <Box component={"span"} sx={{ fontWeight: 500, mb: 1 }}>Zoom Tech Street Helped With:</Box> <Box component={"span"} sx={{ color: "text.darkGray" }}>{zoomHelp}</Box>
                                </Typography>
                                <Box sx={{ mt: 10, textAlign: "center", display: { md: "block", xs: "none" } }}>
                                    <Image src={magicWandIcon} alt="" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </BannerWrapper>
            <Container >
                <Box sx={{ mt: -15, mb: 10 }}>
                    <Box sx={{
                        maxWidth: 575,
                        minHeight: 280,
                        mx: "auto",
                        textAlign: "center",
                        fontStyle: "italic",
                        color: "text.darkGray",
                        backgroundImage: `url("${clientBg.src}")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        py: 6,
                    }}>
                        <Box>
                            <Image src={clientImage} alt="" />
                        </Box>
                        <Typography sx={{ fontSize: 19, fontWeight: 500, my: 2 }}>- {clientName}</Typography>
                        <Typography sx={{ fontSize: 19 }}>{clientQuote}</Typography>


                    </Box>
                    <Box sx={{ maxWidth: 300, textAlign: "center", mt: -10, display: { md: "block", xs: "none" } }}>
                        <Image src={cube3dIcon} alt="" />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default CaseStudyBanner;