import { Box } from '@mui/material';
import React from 'react';
import FreeTrial from '../../src/components/common/FreeTrial';
import ServiceNavigator from '../../src/components/common/ServiceNavigator';
import CustomizeBackgroundRemoval from '../../src/components/common/ServicePagesComponents/CustomizeBackgroundRemoval';
import ServiceBanner from '../../src/components/common/ServicePagesComponents/ServiceBanner';
import SimplifyProcess from '../../src/components/common/ServicePagesComponents/SimplifyProcess';
import WhyUseThis from '../../src/components/common/ServicePagesComponents/WhyUseThis';
import WorkInAction from '../../src/components/common/ServicePagesComponents/WorkInAction';
import data from '../../src/data/services/backgroundRemoval.data';
const BackgroundRemoval = () => {
    return (
        <>
            <ServiceNavigator />
            <Box component={"main"}>
                <ServiceBanner data={data.banner} />
                <WorkInAction data={data.workInAction} />
                <CustomizeBackgroundRemoval cardData={data.customizeServiceCard} />
                <WhyUseThis data={data.whyUseThis} />
                <SimplifyProcess />
                <FreeTrial />
            </Box>
        </>
    );
};

export default BackgroundRemoval;