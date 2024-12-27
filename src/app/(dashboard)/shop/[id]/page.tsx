'use client';
import React, { useState } from 'react';

import { products } from '@/data';
import ProductSwiper from '@/components/_molecules/dynamicProductSwiper';
import Countdown from '@/components/_atoms/Countdown';
import { Button } from '@/components/ui/button';

import addToFavorite from '@/utility/images/svg/hart.svg';
import Image from 'next/image';
import clsx from 'clsx';

export interface IParams {
  id: number;
  locale?: string;
}

interface IProduct {
  id: number;
  title: string;
  category: string;
  description: string;
  rating: number;
  price: number;
  discount: number;
  image: string[];
}

const DynamicProduct = ({ params }: { params: IParams }) => {
  const { id } = params;
  const product: IProduct | undefined = products.find(
    (product) => product.id === +id
  );

  const [count, setCount] = useState<number>(1);

  const startPrice = product.price / (product.discount / 100);

  if (!product) {
    return <p>Product not found</p>;
  }
  return (
    <section className='max-w-[1120px] mx-auto pt-[48px] px-4 sm:px-6 lg:px-8 xl:px-0 '>
      <div className='flex flex-col pb-6'>
        <div className='flex xl:gap-[65px]  flex-col md:flex-row gap-[65px]'>
          <div className='flex-1 overflow-hidden'>
            <div className='md:max-h-[900px]h-full'>
              <ProductSwiper images={product.image} />
            </div>
          </div>
          <div className='flex-1'>
            <div className='flex flex-col gap-4'>
              <div className=''>{product.rating}</div>
              <p className='font-bold  text-[32px] xl:text-[40px] leading-[26px] xl:leading-[44px]   my-1 text-[#141718]'>
                {product.title}
              </p>
              <p className=' font-normal text-[#6c7275] text-base'>
                {product.description}
              </p>
              <div className='flex gap-4 items-center'>
                <p className='font-medium text-[28px] leading-[34px]'>
                  ${product.price}
                </p>
                <span className='text-[20px] leading-[28px] text-[#6c7275] line-through'>
                  ${startPrice}
                </span>
              </div>
            </div>
            <div className='flex flex-col mt-6'>
              <div>
                <p>Offer expires in: </p>
                <Countdown countdownFrom='2025-01-04' />
              </div>
            </div>
            <div>
              <div className='flex gap-6 '>
                <div className='flex gap-6 items-center'>
                  <span
                    onClick={() => setCount((prev) => Math.max(0, prev - 1))}
                    className={clsx(
                      'cursor-pointer',
                      count === 0 && 'appearance-none'
                    )}
                  >
                    -
                  </span>
                  <span>{count}</span>
                  <span
                    onClick={() => setCount((prev) => prev + 1)}
                    className='cursor-pointer'
                  >
                    +
                  </span>
                </div>
                <div className='rounded-lg gap-2 flex justify-center items-center border border-[#141718] flex-1 py-1 md:py-[14px] text-sm md:text-lg'>
                  <Image src={addToFavorite} alt='add To Favorite' />
                  Wishlist
                </div>
              </div>
              <div className='mt-4'>
                <Button className='md:py-[12px] py-2 md:text-lg text-sm'>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className='mt-10'></div>
    </section>
  );
};

export default DynamicProduct;
