import React from 'react';
import ShopsNowBtn from '../../_atoms/ShopsNowBtn';
import Image from 'next/image';

import chair from '@/utility/images/svg/couch.svg';
import closet from '@/utility/images/svg/Closet.svg';
import toaster from '@/utility/images/svg/toaster.svg';

const ShopCollection = () => {
  return (
    <section className='max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 mt-5 xl:px-0'>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 grid-rows-3 md:grid-rows-2'>
        <div className='px-6 py-6 md:row-span-full relative xl:min-h-[664px] md:min-h-[480px] min-h-[377px] flex h-full '>
          <div className='flex flex-col items-start gap-3'>
            <h3 className='md:text-[28px] text-6 xl:text-[33px] font-medium leading-[34px] sm:leading-[38px]'>
              Living Room
            </h3>
            <span>
              <ShopsNowBtn href='/livingRoom' />
            </span>
          </div>
          <div className='bg-[#f3f5f7] absolute inset-0 flex items-center  justify-center   md:min-h-[277px] xl:w-full mr-0  xl:h-auto -z-10'>
            <Image
              src={chair}
              alt='chair'
              className='xl:w-full w-[100%] h-full bg-transparent'
            />
          </div>
        </div>

        <div className='px-6 py-6 relative '>
          <div className='flex flex-col items-start h-full justify-end gap-3'>
            <h3 className='text-[28px] sm:text-[33px] font-medium leading-[34px] sm:leading-[38px] '>
              Bedroom
            </h3>
            <span>
              <ShopsNowBtn href='/badRoom' />
            </span>
          </div>
          <div className='absolute bg-[#f3f5f7]  flex items-center  justify-center  inset-0 right-0  -z-10 w-full min-h-[200px] xl:w-full'>
            <Image
              src={closet}
              alt='storage closet'
              className='w-full h-[80%] md:h-full'
            />
          </div>
        </div>

        <div className='px-6 py-6 relative '>
          <div className='flex flex-col items-start h-full justify-end gap-3'>
            <h3 className='text-[28px] sm:text-[33px] font-medium leading-[34px] sm:leading-[38px]'>
              Kitchen
            </h3>
            <span>
              <ShopsNowBtn href='/kitchen' />
            </span>
          </div>
          <div className='absolute bg-[#f3f5f7]   flex items-center  justify-center  w-full insert-0 right-0 h-full -z-10 bottom-0'>
            <Image
              src={toaster}
              alt='toaster'
              className='w-full h-[80%]  md:h-full mt-15 object-bottom '
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCollection;
