import ShopsNowBtn from '@/components/_atoms/ShopsNowBtn';
import React from 'react';

import home from '@/utility/images/png/home.jpg';
import Image from 'next/image';

function StylishMakeover() {
  return (
    <section className='bg-[#f3f5f7] flex  max-w-[1440px] flex-col md:flex-row mx-auto px-4     lg:px-0'>
      <div className='flex-1  xl:max-h-[532px] md:max-h-[410px] h-full  '>
        <Image
          src={home}
          className='xl:max-h-[532px]  max-h-[400px] object-cover  md:object-cover md:min-h-[380px] min-h-[320px] h-full w-full'
          alt='home design'
        />
      </div>
      <div className='flex-1 xl:min-h-[532px] py-[58px] md:pt-0 md:min-h-[380px] xl:pl-[72px] md:pl-[42px] mr-4 sm:mr-6 lg:mr-8 h-full  flex flex-col md:items-start px-[32px] justify-center xl:gap-6 gap-4 '>
        <div className='flex flex-col xl:gap-4 gap-3 h-full'>
          <span className='font-bold md:text-[16px] text-sm  md:leading-[16px] text-[#377dff]'>
            SALE UP TO 35% OFF
          </span>
          <p className='font-medium xl:text-[44px] md:text-[36px] text-[24px]  leading-6 md:leading-[44px] text-[#141718]'>
            HUNDREDS of <br /> New lower prices!
          </p>
          <p className='max-w-[452px] xl:text-xl sm:text-base text-sm'>
            It’s more affordable than ever to give every <br /> room in your
            home a stylish makeover
          </p>
        </div>
        <div className='self-start'>
          <ShopsNowBtn href='/seeMore' />
        </div>
      </div>
    </section>
  );
}

export default StylishMakeover;
