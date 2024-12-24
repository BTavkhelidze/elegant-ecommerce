import React from 'react';
import Image from 'next/image';
import NavBar from '../_molecules/NavBar';

import ProductsCart from '@/utility/images/svg/productsCart.svg';
import Profile from '@/utility/images/svg/profile.svg';
import search from '@/utility/images/svg/search.svg';

function Header() {
  return (
    <header className=' bg-[#f3f5f7] w-full'>
      <div className='flex justify-between w-full mx-auto  px-[32px] items-center py-4 md:px-[64px] xl:px-0 max-w-[1120px]'>
        <div className='flex items-center gap-1 justify-center'>
          <div className='md:hidden bg-red-400 w-6 h-6 flex items-center justify-center'></div>
          <h1 className='font-medium text-[16px] leading-[24px]  text-center text-black '>
            3legant <span className='text-[#6c7275]'>.</span>
          </h1>
        </div>
        <div className='hidden md:inline-block'>
          <NavBar />
        </div>
        <div className='flex gap-4 items-center'>
          <div className='md:flex hidden gap-4 items-center '>
            <Image src={search} width={20} height={20} alt='search products' />
            <Image src={Profile} alt='my Profile icon' />
          </div>
          <div className='flex gap-[5px] items-center justify-center'>
            <Image src={ProductsCart} alt='productsCart' />
            <div className='w-5 h-5 text-[12px] leading-[10px] font-bold rounded-full bg-black px-[6px] py-[5px] text-white flex justify-center items-center'>
              1
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
