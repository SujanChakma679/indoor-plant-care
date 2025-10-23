import React from 'react';
import bannerPhoto from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='flex w-11/12 mx-auto items-center justify-center'>
            <img className='h-[310px] max-w-full' src={bannerPhoto} alt="" />
            <img className='h-[310px] max-w-full' src={bannerPhoto} alt="" />
        </div>
    );
};

export default Banner;