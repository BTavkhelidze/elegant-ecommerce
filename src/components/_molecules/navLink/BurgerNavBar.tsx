'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import '../../../app/globals.css';
import NavBody from './NavBody';
import NavFooter from './NavFooter';

const links = [
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

export default function BurgerNavBar() {
  const transition = { duration: 1, ease: [0.76, 0, 0.24, 1] };

  const height = {
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

  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial='initial'
      animate='enter'
      exit='exit'
      className='bg-white  w-screen h-screen  inset-0 px-8 overflow-hidden top-14'
    >
      <div className={'wrapper h-screen '}>
        <div className={'container  h-full '}>
          <div className={'container pb-10 h-full flex justify-between'}>
            <NavBody
              links={links}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />

            <NavFooter />
          </div>
        </div>

        {/* <Image src={links[selectedLink.index].src} selectedLink={selectedLink}/> */}
      </div>
    </motion.div>
  );
}
