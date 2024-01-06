import React, { useRef, useState } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//Assets & CSS
import './Header.css';
import Head1 from '../assets/HeadImage.jpg'
import Head2 from '../assets/Puri Temple.jpg'
import Head3 from '../assets/800px-Dhauli-Giri-Shanti-Stupa-Bhubaneswar-Orissa.jpg'
import Head4 from '../assets/Golde Sea Beach.jpg'



// import required modules
import { Autoplay ,Pagination, Navigation } from 'swiper/modules';



export default function Header() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='HeadImgSize' src={Head1} alt=''/></SwiperSlide>
        <SwiperSlide><img className='HeadImgSize' src={Head2} alt=''/></SwiperSlide>
        <SwiperSlide><img className='HeadImgSize' src={Head3} alt=''/></SwiperSlide>
        <SwiperSlide><img className='HeadImgSize' src={Head4} alt=''/></SwiperSlide>
      </Swiper>
      <h1 className='overlayheading'>21st NATIONAL OOO SYMPOSIUM 2024</h1>
<h1 className='overlayheading2'>8th-10th March</h1>
     
    </>
  );
}
