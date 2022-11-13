import { Box } from '@mui/material';
import React from 'react';
import FreeTrial from '../../src/components/common/FreeTrial';
import ServiceNavigator from '../../src/components/common/ServiceNavigator';
import InvisibleMannequinWorkInAction from '../../src/components/common/ServicePagesComponents/InvisibleMannequinWorkInAction';
import ServiceBanner from '../../src/components/common/ServicePagesComponents/ServiceBanner';
import SimplifyProcess from '../../src/components/common/ServicePagesComponents/SimplifyProcess';
import WhyUseThis from '../../src/components/common/ServicePagesComponents/WhyUseThis';
import data from '../../src/data/services/invisibleMannequin.data';

const InvisibleMannequin = () => {
    return (
        <>
            <ServiceNavigator />
            <Box component={"main"}>
                <ServiceBanner data={data.banner} />
                <InvisibleMannequinWorkInAction data={data.workInAction} />
                <WhyUseThis data={data.whyUseThis} />
                <SimplifyProcess />
                <FreeTrial />
            </Box>
        </>
    );
};

export default InvisibleMannequin;