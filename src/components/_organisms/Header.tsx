'use client';
import React from 'react';
import Image from 'next/image';

import ProductsCart from '@/utility/images/svg/productsCart.svg';
import Profile from '@/utility/images/svg/profile.svg';
import search from '@/utility/images/svg/search.svg';

import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import '../../app/globals.css';

import BurgerNavBar from '../_molecules/navLink/BurgerNavBar';
import NavBar from '../_molecules/navLink/NavBar';

function Header() {
  const opacity = {
    initial: {
      opacity: 0,
    },

    open: {
      opacity: 1,

      transition: { duration: 0.35 },
    },

    closed: {
      opacity: 0,

      transition: { duration: 0.35 },
    },
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isActive]);

  useEffect(() => {
    const handleResize = () => {
      if (isActive) {
        setIsActive(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isActive]);

  return (
    <header className=' bg-[#f3f5f7] w-full'>
      <div className='flex justify-between w-full mx-auto  px-[32px] items-center py-4 md:px-[64px] xl:px-0 max-w-[1120px]'>
        <div className='flex items-center gap-1 justify-center relative'>
          <div className='flex items-center justify-center relative flex-col'>
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className='el md:hidden inline-block w-[24px] h-[24px]'
            >
              <div
                className={`${'burger'} ${isActive ? 'burgerActive' : ''}`}
              ></div>

              <div className={'label'}>
                <motion.p
                  variants={opacity}
                  animate={!isActive ? 'open' : 'closed'}
                ></motion.p>
                <motion.p
                  variants={opacity}
                  animate={isActive ? 'open' : 'closed'}
                ></motion.p>
              </div>
            </div>
            <div className='absolute md:hidden -left-[35px] top-7 z-10 '>
              <AnimatePresence mode='wait'>
                {isActive && <BurgerNavBar />}
              </AnimatePresence>
            </div>
          </div>
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
