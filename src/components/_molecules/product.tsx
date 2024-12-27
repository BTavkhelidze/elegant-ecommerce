import React from 'react';
import Image from 'next/image';

import hart from '@/utility/images/svg/hart.svg';
import { Button } from '@/components/ui/button';

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
const Product: React.FC<{ product: IProduct }> = ({ product }) => {
  const startPrice = product.price / (product.discount / 100);
  return (
    <div className='max-w-[262px]  min-h-[433px] '>
      <div className='relative  min-h-[349px] w-full  flex flex-col justify-between '>
        <div className='absolute bg-[#F3F5F7]  max-w-[262px]  w-full  min-h-[349px]  flex justify-center -z-10'>
          <Image
            src={product.image[0]}
            alt={product.title}
            className=' h-[80%] w-full px-0'
            layout='fill'
          />
        </div>
        <div className='flex p-4 flex-col justify-between  flex-1'>
          <div className='flex justify-between'>
            <div className='flex flex-col items-center gap-2'>
              <span className='font-bold text-[16px] leading-[16px] '>NEW</span>
              <div className='py-1 px-[15px]  rounded text-[16px] font-bold leading-4 text-[#fefefe] bg-[#38cb89]'>
                {' '}
                -{product.discount}%
              </div>
            </div>
            <div className='w-8 h-8 rouded-[33px] cursor-pointer hidden md:inline-block'>
              <Image src={hart} alt='add to favorite' />
            </div>
          </div>
          <div className=''>
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className='bg-white'>
        <div className='mt-3'>{product.rating}</div>
        <p className='font-bold text-[16px]  leading-[26px] my-1 text-[#141718]'>
          {product.title}
        </p>
        <div className='flex  gap-4'>
          <p className='font-bold text-[14px] leading-[22px]'>
            ${product.price}
          </p>

          <span className='text-[14px] leading-[22px] text-[#6c7275] line-through'>
            ${startPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
