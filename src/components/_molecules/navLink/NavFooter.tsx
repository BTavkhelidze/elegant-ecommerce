import { motion } from 'framer-motion';
import '@/app/globals.css';

import Image from 'next/image';
import ProductsCart from '@/utility/images/svg/productsCart.svg';

export default function NavFooter() {
  const translate = {
    initial: {
      y: '100%',

      opacity: 0,
    },

    enter: (i) => ({
      y: 0,

      opacity: 1,

      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    }),

    exit: (i) => ({
      y: '100%',

      opacity: 0,

      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
    }),
  };
  return (
    <div className={' mb-20 px-[20px]'}>
      <motion.div
        custom={[0.3, 0]}
        variants={translate}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <div className='flex  justify-between border-b border-b-[#e8ecef] pb-2'>
          <span className='font-medium  text-[#6c7275] text-lg'>Cart</span>
          <div className='flex gap-[5px] items-center justify-center'>
            <Image src={ProductsCart} alt='productsCart' />
            <div className='w-5 h-5 text-[12px] leading-[10px] font-bold rounded-full bg-black px-[6px] py-[5px] text-white flex justify-center items-center'>
              1
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        custom={[0.3, 0]}
        variants={translate}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <span>Typography:</span> Google Fonts
      </motion.div>

      <motion.div
        custom={[0.3, 0]}
        variants={translate}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        <span>Images:</span> Freepik, Envato
      </motion.div>

      <motion.div
        custom={[0.3, 0]}
        variants={translate}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        Privacy Policy
      </motion.div>

      <motion.div
        custom={[0.3, 0]}
        variants={translate}
        initial='initial'
        animate='enter'
        exit='exit'
      >
        Terms & Conditions
      </motion.div>
    </div>
  );
}
