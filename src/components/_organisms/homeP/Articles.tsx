import ShopsNowBtn from '@/components/_atoms/ShopsNowBtn';
import Image from 'next/image';
import React from 'react';

import decorHome from '@/utility/images/png/decor-home.jpg';

function Articles() {
  return (
    <div className='max-w-[1120px] mx-auto pt-[48px] px-4 sm:px-6 lg:px-8 xl:px-0 mb-4'>
      <div className='flex justify-between items-center '>
        <h3 className='xl:text-[40px] text-[34px] leading-[44px] font-medium max-w-[140px] '>
          {'Articles'}
        </h3>
        <div className='hidden md:inline-block'>
          <ShopsNowBtn title='More Articles' href='/newArrival' />
        </div>
      </div>
      <div className='pt-10  flex flex-col md:flex-row justify-between gap-6  md:gap-3 '>
        <div className='flex flex-col '>
          <div className='w-full max-w-[357px] md:max-h-[230px] md:min-h-[150px]   xl:max-h-[325px] xl:min-h-[325px] h-full bg-red-400'>
            <Image
              src={decorHome}
              alt='home decoration'
              className='h-full object-cover'
            />
          </div>
          <div className='bg-white pt-6 flex flex-col items-start gap-2'>
            <p className='xl:font-medium font-semibold xl:text-[20px] xl:leading-[28px] text-[16px] leading-[26px]  text-[#23262f]'>
              7 ways to decor your home
            </p>
            <div className=''>
              <ShopsNowBtn title='Read More' href='/newArrival' />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='w-full max-w-[357px] md:max-h-[230px] md:min-h-[150px]   xl:max-h-[325px] xl:min-h-[325px] h-full bg-red-400'>
            <Image
              src={decorHome}
              alt='home decoration'
              className='h-full object-cover'
            />
          </div>
          <div className='bg-white pt-6 flex flex-col items-start gap-2'>
            <p className='xl:font-medium font-semibold xl:text-[20px] xl:leading-[28px] text-[16px] leading-[26px]  text-[#23262f]'>
              7 ways to decor your home
            </p>
            <div className=''>
              <ShopsNowBtn title='Read More' href='/newArrival' />
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='w-full max-w-[357px] md:max-h-[230px]    xl:max-h-[325px] xl:min-h-[325px] h-full bg-red-400'>
            <Image
              src={decorHome}
              alt='home decoration'
              className='h-full object-cover'
            />
          </div>
          <div className='bg-white pt-6 flex flex-col items-start gap-2 '>
            <p className='xl:font-medium font-semibold xl:text-[20px] xl:leading-[28px] text-[16px] leading-[26px] text-[#23262f]'>
              7 ways to decor your home
            </p>
            <div className=''>
              <ShopsNowBtn title='Read More' href='/newArrival' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
