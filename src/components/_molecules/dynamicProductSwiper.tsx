'use client';
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import '@/app/globals.css';

import Image from 'next/image';

// Import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper/types';

interface IImages {
  images: string[];
}
const ProductSwiper: React.FC<IImages> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  console.log(images);
  return (
    <>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='w-full  xl:min-h-[700px] max-h-[400px] full '
      >
        <SwiperSlide className='  '>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            alt='Nature 2'
            className=''
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            alt='Nature 2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-3.jpg'
            alt='Nature 3'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={images[4]}
            alt='Nature 2'
            className='w-10 h-10'
            width={100}
            height={100}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper md:inline-block hidden'
      >
        <SwiperSlide>
          <Image
            src={images[0]}
            alt='Nature 2'
            className='w-10 h-10'
            width={100}
            height={100}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-2.jpg'
            alt='Nature 2'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-3.jpg'
            alt='Nature 3'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-4.jpg'
            alt='Nature 4'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-5.jpg'
            alt='Nature 5'
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src='https://swiperjs.com/demos/images/nature-6.jpg'
            alt='Nature 6'
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductSwiper;
