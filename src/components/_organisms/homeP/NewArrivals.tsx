'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import { products } from '@/data';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import ShopsNowBtn from '../../_atoms/ShopsNowBtn';

import Product from '@/components/_molecules/product';
// import Link from 'next/link';

export default function NewArrival() {
  return (
    <div className='max-w-[1120px] mx-auto pt-[48px] px-4 sm:px-6 lg:px-8 xl:px-0 '>
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
          className='mySwiper '
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
          {products.map((product) => {
            return (
              // <Link href={`shop/${product.id}`}>
              <SwiperSlide key={product.id}>
                {' '}
                <Product product={product} />
              </SwiperSlide>
              // </Link>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
