import { SwiperParallax } from '@/components/_molecules/Swiper';
import React from 'react';

function page() {
  return (
    <main>
      {' '}
      <section className='max-w-[1120px] mx-auto bg-red-400'>
        <SwiperParallax />
      </section>
    </main>
  );
}

export default page;
