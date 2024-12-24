import React from 'react';

import NavBar from '../_molecules/NavBar';

import facebook from '@/utility/images/svg/facebook.svg';
import instagram from '@/utility/images/svg/instagram.svg';
import youtube from '@/utility/images/svg/youtube.svg';
import Image from 'next/image';

// text-[#6c7275]
function Footer() {
  return (
    <footer className=' bg-[#141718] w-full pt-20 '>
      <div className='pb-[50px] flex md:flex-row flex-col text-white justify-between w-full mx-auto  px-[32px] items-center py-4 md:px-[64px] xl:px-0 max-w-[1120px]'>
        <div className='flex items-center  justify-center gap-8 md:flex-row flex-col'>
          <h1 className='font-medium text-[16px] leading-[24px]  text-center'>
            3legant <span className='text-[#6c7275]'>.</span>
          </h1>
          <span className='text-[#6c7275]'>|</span>
          <p className='text-sm  text-[#e8ecef]'>Gift & Decoration Store</p>
        </div>
        <div className='inline-block '>
          <NavBar color='#fefefe' activeColor='#6c7275' />
        </div>
      </div>
      <div className='border-t border-t-[#6c7275] pt-6 md:pt-4 pb-[52px] gap-8 md:gap-0 text-white flex justify-between px-[32px] items-center md:px-[64px] xl:px-0 max-w-[1120px] mx-auto flex-col md:flex-row'>
        <div className=' flex gap-6 flex-col md:flex-row'>
          <p className='text-xs'>
            Copyright © 2023 3legant. All rights reserved
          </p>
          <div className='flex gap-6 flex-row -order-1 md:order-1 justify-center'>
            <p className='font-semibold text-xs'>Privacy Policy</p>
            <p className='font-semibold text-xs'>Terms of Use</p>
          </div>
        </div>
        <div className='flex gap-6 -order-1 md:order-1'>
          <Image
            src={instagram}
            alt={`instagram icon`}
            width={24}
            height={24}
          />
          <Image src={facebook} alt={`facebook icon`} width={12} height={18} />
          <Image src={youtube} alt={`youtube icon`} width={24} height={24} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
