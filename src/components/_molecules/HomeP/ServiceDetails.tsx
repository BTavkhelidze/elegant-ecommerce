import React from 'react';
import Image from 'next/image';

import shipping from '@/utility/images/svg/shippeng.svg';
// import monyBack from '@/utility/images/svg/monyBack.svg';

function ServiceDetails() {
  return (
    <section className='max-w-[1120px] mb-16 mx-auto pt-[48px] px-4 w-full sm:px-6 lg:px-8 xl:px-0 flex xl:gap-6'>
      <div className='grid gap-6 xl:grid-cols-4 grid-cols-2 grid-rows-2 xl:grid-rows-1  w-full'>
        <div className='max-w-[262px] md:py-8 md:px-6 p-4  xl:py-12  xl:px-9  flex flex-col gap-4 bg-[#f3f5f7]'>
          <Image src={shipping} alt='free shipping icon' />
          <div>
            <p className='font-medium xl:text-[20px] text-[16px] leading-4 xl:leading-[28px] mb-1'>
              Free Shipping{' '}
            </p>
            <span className='font-normal text-[12px] xl:text-[14px] leading-4 xl:leading-[24px] text-[#6c7275]'>
              Order above $200
            </span>
          </div>
        </div>
        <div className='max-w-[262px] md:py-8 md:px-6 p-4  xl:py-12  xl:px-9  flex flex-col gap-4 bg-[#f3f5f7]'>
          <Image src={shipping} alt='free shipping icon' />
          <div>
            <p className='font-medium xl:text-[20px] text-[16px] leading-4 xl:leading-[28px] mb-1'>
              Free Shipping{' '}
            </p>
            <span className='font-normal text-[12px] xl:text-[14px] leading-4 xl:leading-[24px] text-[#6c7275]'>
              Order above $200
            </span>
          </div>
        </div>
        <div className='max-w-[262px] md:py-8 md:px-6 p-4  xl:py-12  xl:px-9  flex flex-col gap-4 bg-[#f3f5f7]'>
          <Image src={shipping} alt='free shipping icon' />
          <div>
            <p className='font-medium xl:text-[20px] text-[16px] leading-4 xl:leading-[28px] mb-1'>
              Free Shipping{' '}
            </p>
            <span className='font-normal text-[12px] xl:text-[14px] leading-4 xl:leading-[24px] text-[#6c7275]'>
              Order above $200
            </span>
          </div>
        </div>
        <div className='max-w-[262px] md:py-8 md:px-6 p-4  xl:py-12  xl:px-9  flex flex-col gap-4 bg-[#f3f5f7]'>
          <Image src={shipping} alt='free shipping icon' />
          <div>
            <p className='font-medium xl:text-[20px] text-[16px] leading-4 xl:leading-[28px] mb-1'>
              Free Shipping{' '}
            </p>
            <span className='font-normal text-[12px] xl:text-[14px] leading-4 xl:leading-[24px] text-[#6c7275]'>
              Order above $200
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
