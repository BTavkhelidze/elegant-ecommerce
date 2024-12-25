import { motion } from 'framer-motion';

import Link from 'next/link';

import '@/app/globals.css';

export default function NavBody({ links, selectedLink, setSelectedLink }) {
  const getChars = (word) => {
    let chars = [];

    word.split('').forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial='initial'
          animate='enter'
          exit='exit'
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });

    return chars;
  };

  const blur = {
    initial: {
      filter: 'blur(0px)',

      opacity: 1,
    },

    open: {
      filter: 'blur(4px)',

      opacity: 0.6,

      transition: { duration: 0.3 },
    },

    closed: {
      filter: 'blur(0px)',

      opacity: 1,

      transition: { duration: 0.3 },
    },
  };

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
    <div className={'body'}>
      {links.map((link, index) => {
        const { title, href } = link;

        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? 'open'
                  : 'closed'
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
}
