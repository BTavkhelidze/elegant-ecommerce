'use client';

import { Checkbox } from '@/components/ui/checkbox';

interface IPrice {
  price: string;
  usePrice: () => void;
}

const prices = [
  'All Price',
  '$0.00 - 99.99',
  '$100.00-199.99',
  '$200.00 - 299.99',
  '$300.00 - 399.99',
  '$400+',
];
export function PriceFilter({ price, usePrice }: IPrice) {
  return (
    <form action='' className='flex flex-col gap-[9px] w-full'>
      {prices.map((el, i) => {
        return (
          <div className='flex justify-between pr-1 w-full gap-[9px]' key={i}>
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#807e7e]'
            >
              {el}
            </label>
            <Checkbox
              id='terms'
              checked={price === el}
              onCheckedChange={() => usePrice(el)}
            />
          </div>
        );
      })}
    </form>
  );
}
