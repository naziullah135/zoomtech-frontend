import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import PricingCard from './PricingCard';
import SingleItem from './SingleItem';

const PricingItem = ({ pricing }) => {
    const { data, name, initialPrice } = pricing;
    const [selectedService, setSelectedService] = useState([]);
    const handleToggleService = (service) => {
        const isAdded = selectedService?.find(item => item.id === service.id);
        if (isAdded) {
            const removed = selectedService.filter(item => item.id !== service.id);
            setSelectedService(removed);
        } else {
            setSelectedService([...selectedService, service])
        }
    }
    const getTotalPrice = () => {
        return (selectedService?.reduce((pre, cur) => Number(cur.price) + pre, 0)).toFixed(2)
    }
    return (
        <Box px={{ sm: 3, xs: 0 }}>
            <Grid container spacing={{ lg: 11, sm: 5, xs: 1 }}>
                <Grid item md={7} xs={12}>
                    <Grid container spacing={{ sm: 3, xs: 2 }}>
                        {
                            data.map((item) =>
                                <SingleItem
                                    selectedService={selectedService}
                                    handleToggleService={handleToggleService}
                                    item={item}
                                    key={item.id}
                                />)
                        }
                    </Grid>
                </Grid>
                <Grid item md={5} xs={12}>
                    <PricingCard
                        name={name}
                        initialPrice={initialPrice}
                        getTotalPrice={getTotalPrice}
                        selectedService={selectedService}
                    />
                </Grid>

                {/* <Box sx={{ mt: 6 }}>
                    <Image src={icon} alt="" />
                </Box> */}
            </Grid>
        </Box>
    );
};

export default PricingItem;