import { Box } from '@mui/material';
import React from 'react';
import FreeTrial from '../../src/components/common/FreeTrial';
import ServiceNavigator from '../../src/components/common/ServiceNavigator';
import ServiceBanner from '../../src/components/common/ServicePagesComponents/ServiceBanner';
import SimplifyProcess from '../../src/components/common/ServicePagesComponents/SimplifyProcess';
import WhyUseThis from '../../src/components/common/ServicePagesComponents/WhyUseThis';
import WorkInAction from '../../src/components/common/ServicePagesComponents/WorkInAction';
import data from '../../src/data/services/jewelryRetouching.data';

const JewelryRetouching = () => {
    return (
        <>
            <ServiceNavigator />
            <Box component={"main"}>
                <ServiceBanner data={data.banner} />
                <WorkInAction data={data.workInAction} />
                <WhyUseThis data={data.whyUseThis} />
                <SimplifyProcess />
                <FreeTrial />
            </Box>
        </>
    );
};

export default JewelryRetouching;