import React from 'react';

import { products } from '@/data';

export interface IParams {
  id: number;
  locale?: string;
}

const page = ({ params }: { params: IParams }) => {
  const { id } = params;
  const singleProduct = products.find((product) => product.id === +id);

  return (
    <section className='max-w-[1120px] mx-auto pt-[48px] px-4 sm:px-6 lg:px-8 xl:px-0 '>
      sad
    </section>
  );
};

export default page;
