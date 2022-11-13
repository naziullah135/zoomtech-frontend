import React from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
const ImageCompare = ({ img1, img2 }) => {
    return (
        <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={img1.src} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={img2.src} alt="Image two" />}
        />
    );
};

export default ImageCompare;