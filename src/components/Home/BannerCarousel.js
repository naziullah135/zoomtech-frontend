import React, { useEffect, useState } from 'react';
// Import Swiper React components
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import carousel1 from "./../../assets/images/HomePage/carousel/home banner (1).jpg";
import carousel2 from "./../../assets/images/HomePage/carousel/home banner (2).jpg";
import carousel3 from "./../../assets/images/HomePage/carousel/home banner (3).jpg";
import carousel4 from "./../../assets/images/HomePage/carousel/home banner (4).jpg";
import carousel5 from "./../../assets/images/HomePage/carousel/home banner (5).jpg";
import carousel6 from "./../../assets/images/HomePage/carousel/home banner (6).jpg";
import carousel7 from "./../../assets/images/HomePage/carousel/home banner (7).jpg";
import { Box } from '@mui/material';
import unionIcon from './../../assets/icons/homepage/Union.svg';
SwiperCore.use([Pagination, Autoplay]);

const slides = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7];

const carouselStyle = {
    background: {
        md: `url("${unionIcon.src}") no-repeat bottom right`
    },
    px: 4,
    '& .swiper': {
        pb: 5
    },
    '& .swiper-pagination': {
        '& .swiper-pagination-bullet': {
            bgcolor: "#E8E8E3",
            height: 10,
            width: 10,
            '&.swiper-pagination-bullet-active': {
                width: 28,
                bgcolor: "primary.main",
                borderRadius: '12px'
            }
        }
    },
}


const BannerCarousel = () => {
    const [slidesPerView, setSlidesPerView] = useState(2)
    useEffect(() => {
        if (typeof window !== undefined && window.innerWidth < 600) {
            setSlidesPerView(1)
        } else {
            setSlidesPerView(2)
        }
    }, [])
    return (
        <Box sx={carouselStyle}>
            <Swiper
                autoplay
                spaceBetween={24}
                pagination={{ clickable: true }}
                slidesPerView={slidesPerView}
            >
                {
                    slides.map((img, i) => (
                        <SwiperSlide key={i}>
                            <Box sx={{ textAlign: "center" }}>
                                <Image src={img} alt="" />
                            </Box>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </Box>
    );
};

export default BannerCarousel;



