import { Divider } from '@mui/material';
import React from 'react';

const HRDivider = ({ sx }) => {
    return (
        <Divider sx={{ mt: 6, mb: 6, borderColor: "#F5F5F3", borderBottomWidth: "unset", ...sx }} />
    );
};

export default HRDivider;