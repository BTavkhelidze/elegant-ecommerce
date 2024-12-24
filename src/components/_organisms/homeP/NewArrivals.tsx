'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import sofa from '@/utility/images/svg/sofa.svg';
import hart from '@/utility/images/svg/hart.svg';
import { Button } from '@/components/ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import ShopsNowBtn from '../../_atoms/ShopsNowBtn';
import Image from 'next/image';

export default function NewArrival() {
  return (
    <div className='max-w-[1120px] mx-auto pt-[48px] px-4 sm:px-6 lg:px-8 xl:px-0'>
      <div className='flex justify-between items-center'>
        <h3 className='xl:text-[40px] text-[34px] leading-[44px] font-medium max-w-[140px] '>
          {'New\n Arrival'}
        </h3>
        <div className='hidden md:inline-block'>
          <ShopsNowBtn title='More Products' href='/newArrival' />
        </div>
      </div>
      <div className='mt-[48px] mb-10'>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className='max-w-[262px]  min-h-[433px] '>
              <div className='relative  min-h-[349px] w-full  flex flex-col justify-between '>
                <div className='absolute bg-[#F3F5F7]  max-w-[262px]  w-full  min-h-[349px]  flex justify-center -z-10'>
                  <Image
                    src={sofa}
                    alt={'sofa'}
                    className=' h-[80%] w-full px-0'
                  />
                </div>
                <div className='flex p-4 flex-col justify-between  flex-1'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col items-center gap-2'>
                      <span className='font-bold text-[16px] leading-[16px] '>
                        NEW
                      </span>
                      <div className='py-1 px-[15px]  rounded text-[16px] font-bold leading-4 text-[#fefefe] bg-[#38cb89]'>
                        {' '}
                        -50%
                      </div>
                    </div>
                    <div className='w-8 h-8 rouded-[33px] cursor-pointer hidden md:inline-block'>
                      <Image src={hart} alt='add to favorite' />
                    </div>
                  </div>
                  <div className=''>
                    <Button>Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className='bg-white'>
                <div className='mt-3'>star</div>
                <p className='font-bold text-[16px] leading-[26px] my-1 text-[#141718]'>
                  Loveseat Sofa
                </p>
                <div className='flex  gap-4'>
                  <p className='font-bold text-[14px] leading-[22px]'>
                    $199.00
                  </p>
                  <span className='text-[14px] leading-[22px] text-[#6c7275] line-through'>
                    $400.00
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
