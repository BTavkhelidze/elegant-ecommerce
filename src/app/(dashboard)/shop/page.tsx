import React from 'react';
import Image from 'next/image';

import ShopWelcome from '@/utility/images/png/shopImage.jpg';
import { RoomsFilter } from '@/components/_atoms/shopP/RoomsFilter';
import { PriceFilter } from '@/components/_atoms/shopP/PriceFilter';

function page() {
  return (
    <main className='px-8 md:px-[64px] xl:px-0 mx-auto max-w-[1120px] mb-40'>
      <section className='xl:min-h-[360px] bg-opacity-50 md:min-h-[250px]  xl:max-h-[392px] h-full relative flex items-center justify-center'>
        <div className='w-full inset-0 h-full      absolute  -z-10 '>
          <Image
            src={ShopWelcome}
            alt='image'
            className='w-full h-full  object-cover '
          />
        </div>
        <div className='text-center flex w-full  h-full items-center max-w-[540px] flex-col gap-4 md:gap-6 py-20 px-1'>
          <h4 className='text-[#141718] font-medium text-[40px] leading-[40px]'>
            Shop Page
          </h4>
          <p className='text-lg text-[#141718]'>
            Let’s design the place you always imagined.
          </p>
        </div>
      </section>
      <section className='flex w-full flex-col md:flex-row pt-16'>
        <div className='md:flex-1'>
          <div>
            <p>filter</p>
            <div className='max-h-[226px] overflow-hidden mt-8'>
              <h4 className='mb-4 text-sm font-medium leading-none '>
                CATEGORIES
              </h4>
              <RoomsFilter />
            </div>
            <div className='pt-8'>
              <h4 className='mb-4 text-sm font-medium leading-none '>PRICE</h4>
              <PriceFilter />
            </div>
          </div>
        </div>
        <div className='md:flex-[70%] bg-green-500'>s</div>
      </section>
    </main>
  );
}

export default page;
