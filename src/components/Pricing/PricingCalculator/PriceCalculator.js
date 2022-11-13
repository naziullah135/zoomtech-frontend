import { Box, Container, Tab, Tabs, Typography } from '@mui/material';
import React from 'react';
import { priceData } from '../../../data/price.data';
import BannerWrapper from '../../common/BannerWrapper';
import PricingItem from './PricingItem';
import magicWand from "./../../../assets/icons/homepage/noun-magic-wand-217915 2.svg"
import cube3D from "./../../../assets/icons/homepage/noun-3d-cube-1124776 1.svg"
import threeD from "./../../../assets/icons/homepage/noun-3d-68010 1.svg";
import thumbnail from "./../../../assets/icons/homepage/Group 78.svg";
import Image from 'next/image';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Box
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 3, px: { sm: 3, xs: 1 } }}>
                    {children}
                </Box>
            )}
        </Box>
    );
}

const PriceCalculator = ({ image }) => {

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



    const jsx = <Container>
        <Typography variant='h2' sx={{ textAlign: "center", mb: { lg: 0, xs: 5 } }}>Price Estimation Calculator</Typography>
        <Box sx={{ textAlign: "right", display: { lg: 'block', xs: 'none' } }}>
            <Image src={image ? magicWand : cube3D} alt="" />
        </Box>
        <Box sx={{ width: '100%', minHeight: 600, position: "relative" }}>
            <Tabs sx={{
                '& .MuiTab-root': {
                    fontSize: 19,
                    color: "text.darkGray",
                    textTransform: "capitalize",
                    p: 0,
                    mx: 2,
                    minWidth: "unset",
                    '&.Mui-selected': {
                        color: "secondary.main"
                    }
                },
            }}
                value={image ? 0 : 1}
                centered>
                <Tab onClick={(e) => handleClick(e, "#back-to-top-anchor")} label="Image Editing" />
                <Tab onClick={(e) => handleClick(e, "#cgi-pricing")} label="CGI / 3D" />
            </Tabs>
            <TabPanel value={image ? 0 : 1} index={image ? 0 : 1}>
                <PricingItem pricing={priceData[image ? 0 : 1]} />
                <Box sx={{ position: "absolute", bottom: 120, left: 0, display: { lg: 'block', xs: 'none' } }}>
                    <Image src={image ? thumbnail : threeD} alt="" />
                </Box>
            </TabPanel>
        </Box>
    </Container>

    return (

        <>
            {
                image ?
                    <BannerWrapper sx={{ py: 5, mb: 5 }}>
                        {jsx}
                    </BannerWrapper> :
                    <Box id="cgi-pricing" component={"section"} sx={{ mt: -10, pt: 10, mb: 16 }}>
                        {jsx}
                    </Box>
            }

        </>

    );
};

export default PriceCalculator;