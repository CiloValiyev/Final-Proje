import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../swipperMessage/swipperOne.scss"
// import required modules
import { Autoplay, Navigation } from 'swiper';
import axios from 'axios';

const SwipperOne = () => {
    const [data, setData] = useState([]);
    function getData() {
        const URL = "http://localhost:8080/message/";
        axios.get(URL).then((res) => setData(res.data))
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

                navigation={false}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {data && data.map((d) => (
                    <SwiperSlide key={d.id} className='swipper-slide-message'>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className='success-stories'>
                                        <h1>Success <span>Stories </span></h1>
                                        <p>Here you can see</p>
                                    </div>
                                    <div className='message'>
                                        <div className='text'><p>{d.message}</p></div>
                                        <span className='testimonials-inner'></span>
                                    </div>
                                    <div className='avatar'>
                                        <img src={d.avatar} alt="avatar" />
                                        <h3>{d.name}</h3>
                                        <p>{d.categories}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default SwipperOne