import { Typography } from '@mui/material';
import React from 'react';

const Heading = ({ children, variant, sx, ...others }) => {
    console.log(variant);
    return (
        <Typography variant={variant} sx={{
            fontSize: {
                lg: variant === "h1" ? 46 :
                    variant === "h2" ? 33 :
                        variant === "h3" ? 33 : 15,

                md: variant === "h1" ? 41 :
                    variant === "h2" ? 30 : 15,

                sm: variant === "h1" ? 37 :
                    variant === "h2" ? 28 : 15,

                xs: variant === "h1" ? 33 :
                    variant === "h2" ? 26 : 15,
            },
            ...sx
        }} >
            {children}
        </Typography>
    );
};

export default Heading;