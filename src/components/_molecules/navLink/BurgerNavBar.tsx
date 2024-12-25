'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

import '../../../app/globals.css';
import NavBody from './NavBody';
import NavFooter from './NavFooter';

type Link = {
  title: string;
  href: string;
  src: string;
};

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    src: 'home.png',
  },
  {
    title: 'Shop',
    href: '/shop',
    src: 'shop.png',
  },
  {
    title: 'About Us',
    href: '/about',
    src: 'home.png',
  },
  {
    title: 'Lookbook',
    href: '/lookbook',
    src: 'lookbook.png',
  },
  {
    title: 'Contact',
    href: '/contact',
    src: 'contact.png',
  },
];

type SelectedLink = {
  isActive: boolean;
  index: number;
};

export default function BurgerNavBar() {
  const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

  const height: Variants = {
    initial: {
      height: 0,
    },
    enter: {
      height: '100vh',
      transition,
    },
    exit: {
      height: 0,
      transition,
    },
  };

  const [selectedLink, setSelectedLink] = useState<SelectedLink>({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial='initial'
      animate='enter'
      exit='exit'
      className='bg-white w-screen h-screen inset-0 px-8 overflow-hidden top-14'
    >
      <div className='wrapper h-screen'>
        <div className='container h-full'>
          <div className='container pb-10 h-full flex justify-between'>
            <NavBody
              links={links}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />
            <NavFooter />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
