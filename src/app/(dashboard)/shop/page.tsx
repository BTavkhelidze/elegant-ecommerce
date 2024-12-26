'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import ShopWelcome from '@/utility/images/png/shopImage.jpg';

import { RoomsFilter } from '@/components/_atoms/shopP/RoomsFilter';
import { PriceFilter } from '@/components/_atoms/shopP/PriceFilter';
import cols2 from '@/utility/images/svg/cols2.svg';
import cols3 from '@/utility/images/svg/cols3.svg';
import filter from '@/utility/images/svg/filter.svg';

import { products } from '@/data.js';
import Product from '@/components/_molecules/product';
import JoinOurNewsletter from '@/components/_molecules/HomeP/JoinOurNewsletter';
import Link from 'next/link';

function Shop() {
  const [category, setCategory] = useState('All Rooms');
  const [price, setPrice] = useState('All price');
  const [grid, setGrid] = useState(3);

  return (
    <main className='w-full '>
      <div className='   py-4 px-4 sm:px-6 lg:px-8 xl:px-0 mx-auto max-w-[1120px]'>
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
        <section className='flex w-full flex-col md:flex-row pt-16 gap-6 '>
          <div className='md:flex-1'>
            <div>
              <div className='flex gap-2 items-center'>
                <Image src={filter} alt='filter' />
                <h4 className='font-semibold text-xl'>filter</h4>
              </div>
              <div className='max-h-[226px] overflow-hidden mt-6'>
                <h4 className='mb-4 text-sm font-medium leading-none hidden md:inline-block'>
                  CATEGORIES
                </h4>
                <div className='hidden md:inline-block w-full'>
                  <RoomsFilter category={category} useCategory={setCategory} />
                </div>
              </div>
              <div className='pt-8 hidden md:inline-block w-full'>
                <h4 className='mb-4 text-sm font-medium leading-none '>
                  PRICE
                </h4>
                <PriceFilter price={price} usePrice={setPrice} />
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-10 md:flex-[90%] xl:flex-[70%]'>
            <div className='flex justify-between'>
              <h4 className='font-semibold text-xl'> {category}</h4>
              <div className='flex gap-[11px]'>
                <Image
                  src={cols3}
                  alt='sort '
                  className='cursor-pointer hidden md:inline-block'
                  onClick={() => setGrid(3)}
                />
                <Image
                  src={cols2}
                  alt='sort '
                  className='cursor-pointer'
                  onClick={() => setGrid(2)}
                />
              </div>
            </div>
            <div className={` grid grid-cols-2 md:grid-cols-${grid} gap-3 `}>
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`shop/${product.id}`}
                  className='cursor-pointer'
                >
                  <Product product={product} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className='md:pt-[100px] pt-[80px]'>
        <JoinOurNewsletter />
      </div>
    </main>
  );
}

export default Shop;
