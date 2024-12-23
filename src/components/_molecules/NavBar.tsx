'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

interface INavLinks {
  href: string;
  title: string;
  id: number;
}

const navLinks: INavLinks[] = [
  { title: 'Home', href: '/home', id: 1 },
  { title: 'Shop', href: '/shop', id: 2 },
  { title: 'Product', href: '/product', id: 3 },
  { title: 'Contact Us', href: '/contactUs', id: 4 },
];

function NavBar() {
  const pathName = usePathname();
  return (
    <nav className=' md:flex'>
      <ul className='flex flex-col md:flex-row gap-10'>
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={clsx(
              'font-medium text-[14px] leading-[24px] text-[#6c7275]',
              { 'text-black': pathName == link.href }
            )}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
