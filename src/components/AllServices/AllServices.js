import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { imageEditingService } from '../../data/services/allServices.data';
import unionIcon from "./../../assets/icons/homepage/Group 83.svg";
import arrow from "./../../assets/icons/homepage/Vector 25.svg";
import arrowDown from "./../../assets/icons/services/arrow-down.svg";
import magicWandIcon from "./../../assets/icons/homepage/noun-magic-wand-217915 1.svg";
import magicWandIcon2 from "./../../assets/icons/homepage/noun-magic-wand-217915 2.svg";
import cropIcon from "./../../assets/images/About/noun-crop.svg";
import thumbnail from "./../../assets/icons/homepage/Group 78.svg";
import SingleServiceItem from './SingleServiceItem';
const titleStyle = {
    width: "fit-content",
    mx: 'auto',
    textAlign: "center",
    mb: 2,
    fontSize: { md: 33, xs: 28 },
    pl: {
        md: 5,
        xs: 0
    },
    '& .union': {
        mb: 2,
        display: { md: "inline-block", xs: "none" }
    }
}
const AllServices = () => {
    const handleClick = (event, id) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            id,
        );

        if (anchor) {
            anchor.scrollIntoView({
                behavior: "smooth",
                block: "center",

            });
        }
    };

    return (
        <>
            <Box component={"section"} sx={{ bgcolor: "light.main", pb: 8 }}>
                <Container mt={2}>
                    <Box sx={{ ml: 22, display: { md: "block", xs: "none" } }}>
                        <Image src={arrow} alt="" />
                    </Box>
                    <Typography sx={titleStyle} variant='h2'>Professional Image Editing and CGI Services<img className='union' src={unionIcon.src} alt="" /></Typography>
                    <Box sx={{ textAlign: "right", display: { md: "block", xs: "none" } }}>
                        <Image src={arrow} alt="" />
                    </Box>
                    <Typography variant='body1' sx={{ maxWidth: 550, mx: "auto", textAlign: "center", color: "text.secondary", mb: 6 }}>We provide top-quality services keeping your requirements in mind.
                        Try us out and see how we can help you in your journey.</Typography>

                    <Tabs sx={{
                        '& .MuiTab-root': {
                            fontSize: 19,
                            color: "text.darkGray",
                            textTransform: "capitalize",
                            p: 0,
                            mx: 2,
                            minWidth: "unset",
                            '&.Mui-selected': {
                                color: "text.darkGray"
                            }
                        },
                    }}
                        value={0}
                        centered>
                        <Tab onClick={(e) => handleClick(e, "#back-to-top-anchor")} label="Image Editing" />
                        <Tab onClick={(e) => handleClick(e, "#cgi-services")} label="CGI / 3D" />
                    </Tabs>

                    <Box pb={1}>
                        <SingleServiceItem service={imageEditingService[0]} index={0} />
                        <Box sx={{ textAlign: "right", width: "95%", position: "relative", bottom: 220, display: { md: "block", xs: "none" } }}>
                            <Image src={thumbnail} alt="" />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box my={12}>
                <Container>
                    <SingleServiceItem service={imageEditingService[1]} index={1} />
                    <Box sx={{ textAlign: "right", width: "35%", display: { md: "block", xs: "none" } }}>
                        <Image src={magicWandIcon2} alt="" />
                    </Box>
                    <SingleServiceItem service={imageEditingService[2]} index={2} />

                    <Box sx={{ textAlign: "right", width: "40%", display: { md: "block", xs: "none" } }}>
                        <Image src={cropIcon} alt="" />
                    </Box>
                    <SingleServiceItem service={imageEditingService[3]} index={3} />
                    <Box sx={{ textAlign: "right", mr: 5, display: { md: "block", xs: "none" } }}>
                        <Image src={magicWandIcon} alt="" />
                    </Box>
                    <div id="cgi-services"></div>
                </Container>
            </Box>
        </>
    );
};

export default AllServices;