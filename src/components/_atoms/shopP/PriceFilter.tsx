'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

const prices = [
  'All Price',
  '$0.00 - 99.99',
  '$100.00-199.99',
  '$200.00 - 299.99',
  '$300.00 - 399.99',
  '$400+',
];
export function PriceFilter() {
  const [selectedPrice, setSelectedPrice] = useState<string>('All Price');
  console.log(selectedPrice);

  return (
    <form action='' className='flex flex-col gap-[9px]'>
      {prices.map((price, i) => {
        return (
          <div className='flex justify-between pr-1' key={i}>
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#807e7e]'
            >
              {price}
            </label>
            <Checkbox
              id='terms'
              checked={selectedPrice === price}
              onCheckedChange={() => setSelectedPrice(price)}
            />
          </div>
        );
      })}
    </form>
  );
}
