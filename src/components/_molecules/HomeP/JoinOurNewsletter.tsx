import React from 'react';

import couch from '@/utility/images/png/image.png';
import Image from 'next/image';
import { EmailInput } from '@/components/_atoms/EmailInputs';

function JoinOurNewsletter() {
  return (
    <section className=' relative flex items-center justify-center  max-w-[1440px] xl:py-0 md:py-12 py-16 xl:min-h-[360px] h-full md:flex-row mx-auto px-4 xl:px-0   md:px-0 lg:px-0'>
      <div className='w-full bg-[#f2f4f6] inset-0 xl:min-h-[360px] md:min-h-[250px]   absolute  -z-10 '>
        <Image
          src={couch}
          alt='image'
          className='w-full h-full hidden md:inline-block  xl:object-scale-down object-hidden'
        />
      </div>
      <div className='flex w-full h-full items-center max-w-[540px] flex-col gap-2'>
        <h4 className='text-[#141718] font-medium text-[40px] leading-[40px]'>
          Join Our Newsletter
        </h4>
        <p className='text-lg text-[#141718]'>
          Sign up for deals, new products and promotions
        </p>
        <div className='mt-6 w-full flex justify-center'>
          <EmailInput />
        </div>
      </div>
    </section>
  );
}

export default JoinOurNewsletter;
