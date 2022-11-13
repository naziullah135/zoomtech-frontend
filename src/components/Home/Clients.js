import { Box, Container } from '@mui/material';
import React from 'react';
import aeyde from "./../../assets/images/HomePage/clients/aeyde.svg";
import ccv from "./../../assets/images/HomePage/clients/Calque.svg";
import arrow from "./../../assets/images/HomePage/clients/arrow.svg";
import jewelry from "./../../assets/images/HomePage/clients/jewelry-midas.svg";
import miniLabs from "./../../assets/images/HomePage/clients/mini-labs.svg";
import Image from 'next/image';

const clients = [aeyde, ccv, arrow, jewelry, miniLabs];
const styles = {
    display: "flex",
    justifyContent: {
        md: "space-between",
        xs: "center"
    },
    flexWrap: "wrap",
    '& .image': {
        m: {
            lg: 0,
            xs: 2
        }
    },
    "& img": {
        maxHeight: {
            md: 65,
            sm: 55,
            xs: 45
        },
    }
}

const Clients = () => {
    return (
        <Box component={"section"} mt={-6}>
            <Container>
                <Box sx={styles}>
                    {
                        clients.map((img, i) => <Box className='image' key={i}><Image src={img} alt="" /></Box>)
                    }
                </Box>
            </Container>
        </Box>
    );
};

export default Clients;