import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../swipper/swiper.scss"
// import required modules
import { Autoplay, Navigation } from 'swiper';

const Swipper = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='swipper-slide1'>
                    <div className='swipper-center'>
                        <h1>We offer <span>1,259 </span>job vacancies right now!</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swipper-slide2'>
                    <div className='swipper-center'>
                        <h1>We offer <span>1,259 </span>job vacancies right now!</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='swipper-slide3'>
                    <div className='swipper-center'>
                        <h1>We offer <span>1,259 </span>job vacancies right now!</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Swipper