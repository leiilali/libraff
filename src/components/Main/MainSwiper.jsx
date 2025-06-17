import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import '../../style/heroSwiper.css'

import banner1_sm from "../../assets/images/heroBannerImages/banner1_sm.webp"
import banner2_sm from "../../assets/images/heroBannerImages/banner2_sm.webp"
import banner3_sm from "../../assets/images/heroBannerImages/banner3_sm.webp"
import banner4_sm from "../../assets/images/heroBannerImages/banner4_sm.webp"
import banner5_sm from "../../assets/images/heroBannerImages/banner5_sm.webp"
import banner6_sm from "../../assets/images/heroBannerImages/banner6_sm.webp"

import banner1_lg from "../../assets/images/heroBannerImages/banner1_lg.webp";
import banner2_lg from "../../assets/images/heroBannerImages/banner2_lg.webp";
import banner3_lg from "../../assets/images/heroBannerImages/banner3_lg.webp";
import banner4_lg from "../../assets/images/heroBannerImages/banner4_lg.webp";
import banner5_lg from "../../assets/images/heroBannerImages/banner5_lg.webp";
import banner6_lg from "../../assets/images/heroBannerImages/banner6_lg.webp";


function MainSwiper() {

    const bannerData = [
        { sm: banner1_sm, lg: banner1_lg },
        { sm: banner2_sm, lg: banner2_lg },
        { sm: banner3_sm, lg: banner3_lg },
        { sm: banner4_sm, lg: banner4_lg },
        { sm: banner5_sm, lg: banner5_lg },
        { sm: banner6_sm, lg: banner6_lg },
      ];
      
    return (
        <div>
            <Swiper
                loop={true}
                speed={1000} 
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: '.custom-swiper-pagination',
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="w-full h-full"
            >
                {
                    bannerData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <picture>
                                <source srcSet={item.sm} media="(max-width: 640px)" />
                                <img
                                    src={item.lg}
                                    alt={`hero_banner_${index}`}
                                    className="w-full h-[400px] sm:h-[400px] md:h-[500px] object-cover object-center"
                                />
                            </picture>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            <div className="custom-swiper-pagination flex justify-center mt-5"></div>


        </div>
    )
}

export default MainSwiper