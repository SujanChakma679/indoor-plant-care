// src/components/PlantSwiper.jsx
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';

const PlantSwiper = () => {
  return (
    <Swiper
      
          spaceBetween={30}
          slidesPerView={3}
          loop={true}              
          speed={6000}               
          autoplay={{
            delay: 0,                 
            disableOnInteraction: false,
          }}
          freeMode={true}             
          grabCursor={true}          
          modules={[Autoplay, FreeMode]} 
    >
      <SwiperSlide><p className='text-green-700 bg-amber-200 border shadow-lg p-4 text-center rounded-xl'>“Bring Nature In Your Home.”</p></SwiperSlide>
      <SwiperSlide><p className='text-green-700 bg-amber-200 border shadow-lg p-4 text-center rounded-xl'>“Green Living Made Easy.”</p></SwiperSlide>
      <SwiperSlide><p className='text-green-700 bg-amber-200 border shadow-lg p-4 text-center rounded-xl'> “Nurture Your Space, Nurture Your Soul.” </p></SwiperSlide>
      <SwiperSlide><p className='text-green-700 bg-amber-200 border shadow-lg p-4 text-center rounded-xl'>“Healthy Plants, Happy Homes.” </p></SwiperSlide>
      <SwiperSlide><p className='text-green-700 bg-amber-200 border shadow-lg p-4 text-center rounded-xl'>“From Our Garden to Your Home.”</p></SwiperSlide>
    </Swiper>
  );
};

export default PlantSwiper;
