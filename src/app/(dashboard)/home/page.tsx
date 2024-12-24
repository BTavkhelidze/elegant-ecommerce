import JoinOurNewsletter from '@/components/_molecules/HomeP/JoinOurNewsletter';
import ServiceDetails from '@/components/_molecules/HomeP/ServiceDetails';
import StylishMakeover from '@/components/_molecules/HomeP/StylishMakeover';
import { SwiperParallax } from '@/components/_molecules/HomeP/Swiper';
import Articles from '@/components/_organisms/homeP/Articles';
import NewArrival from '@/components/_organisms/homeP/NewArrivals';
import ShopCollection from '@/components/_organisms/homeP/ShopCollection';
import React from 'react';

function page() {
  return (
    <main>
      {' '}
      <section className='max-w-[1120px] mx-auto  px-[32px]'>
        <SwiperParallax />
        <div className='flex md:flex-row flex-col gap-4  justify-between items-center '>
          <div className=' flex flex-col  w-full md:min-h-[152px] xl:gap-5 min-h-[88px] mt-[32px] h-full  xl:max-w-[643px]  items-center md:items-start'>
            <h3 className='font-bold  xl:text-[72px] md:text-[46px] leading-[44px] text-[40px]'>
              Simply Better <span className='text-[#6c7275]'>.</span>
            </h3>
            <h3 className='font-bold  text-[40px]  xl:text-[72px] leading-[44px] md:text-[46px]'>
              Simply Unique <span className='text-[#6c7275]'>/</span>
            </h3>
          </div>
          <div className=''>
            <p className='font-semibold text-[14px] md:text-[16px] leading-[22px] text-[#6c7275]'>
              <span className='font-semibold text-[16px] leading-[26px] text-black'>
                {' '}
                3legant{' '}
              </span>{' '}
              is a gift & decorations store based in HCMC,
              <br className='hidden md:inline-block' /> Vietnam. Est since 2019.{' '}
            </p>
          </div>
        </div>
      </section>
      <ShopCollection />
      <NewArrival />
      <ServiceDetails />
      <StylishMakeover />
      <Articles />
      <JoinOurNewsletter />
    </main>
  );
}

export default page;
