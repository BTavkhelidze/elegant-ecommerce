import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import arrowRight from '@/utility/images/svg/arrowRight.svg';

function ShopsNowBtn({ href, title }: { href: string; title?: string }) {
  return (
    <>
      <Link
        href={href}
        className='flex gap-1   border-b border-b-[#141718]  font-medium md:text-[16px] md:leading-[28px] text-[14px] text-[#141718] leading-[24px]'
      >
        {title ? title : 'Shop Now'}
        <Image src={arrowRight} alt={`${title ? title : 'Shop Now'} icon`} />
      </Link>
    </>
  );
}

export default ShopsNowBtn;
