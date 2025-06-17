import React from 'react'
import card1 from "../../assets/images/libraffsChoicesImages/choice1.webp"
import card2 from "../../assets/images/libraffsChoicesImages/choice2.webp"
import card3 from "../../assets/images/libraffsChoicesImages/choice3.webp"
import card4 from "../../assets/images/libraffsChoicesImages/choice4.webp"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../style/mainSwiper.css"
import { Navigation, FreeMode } from 'swiper/modules';





function LibraffsChoices() {

    const cards = [card1, card2, card3, card4]
    return (
        <div className='container '>

            <h2 className='nunito-font text-[26px] text-[#0f172a]'><span className='text-[#ee2d39]'>Libraffın</span> seçimləri </h2>

            <Swiper
                modules={[FreeMode, Navigation]}
                freeMode={true}
                navigation={true}
                spaceBetween={16}
                slidesPerView="auto"
                className="mt-6"
            >
                {cards.map((item, index) => (
                    <SwiperSlide
                        key={index}
                        className="!w-[330px] !h-[500px] rounded-2xl overflow-hidden"
                    >
                        <img
                            src={item}
                            alt={`Card ${index}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default LibraffsChoices