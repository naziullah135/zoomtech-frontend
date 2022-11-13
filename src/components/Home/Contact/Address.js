import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import location from "./../../../assets/icons/homepage/carbon_location-filled.svg";
import call from "./../../../assets/icons/homepage/eva_phone-call-fill.svg";
import email from "./../../../assets/icons/homepage/Subtract.svg";
import clock from "./../../../assets/icons/homepage/ic_baseline-access-time-filled.svg";

const ListItem = ({ icon, children }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: "start" }}>
            <Image src={icon} alt="" />
            <Typography sx={{ ml: 1, mt: "-3px" }} variant='body2' color="text.darkGray">{children}</Typography>
        </Box>
    )
}

const Address = () => {
    return (
        <>
            <Typography mt={4} mb={1} variant='h4'>Visit us</Typography>
            <ListItem icon={location}>
                Uttara, Sector 12, Road 12, House 13 <br /> Dhaka, 1230
            </ListItem>
            <Typography mt={4} mb={1} variant='h4'>Contact Information</Typography>
            <ListItem icon={call}>
                Phone: +88 01928-011265
            </ListItem>
            <ListItem icon={email}>
                Email: info@zoomtechstreet.com
            </ListItem>
            <Typography mt={4} mb={1} variant='h4'>Contact Time</Typography>
            <ListItem icon={clock}>
                Monday-Thursday 8:00-18:00 Hrs <br /> Friday-8:00-14:00
            </ListItem>
        </>
    );
};

export default Address;