import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import '@/app/globals.css';

type LinkItem = {
  title: string;
  href: string;
  src?: string; // Optional, in case some links don't have a source
};

type NavBodyProps = {
  links: LinkItem[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: React.Dispatch<
    React.SetStateAction<{ isActive: boolean; index: number }>
  >;
};

export default function NavBody({
  links,
  selectedLink,
  setSelectedLink,
}: NavBodyProps) {
  const getChars = (word: string) => {
    return word.split('').map((char, i) => (
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial='initial'
        animate='enter'
        exit='exit'
        key={`${char}_${i}`}
      >
        {char}
      </motion.span>
    ));
  };

  const blur: Variants = {
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

  const translate: Variants = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    enter: (i: [number, number]) => ({
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
    }),
    exit: (i: [number, number]) => ({
      y: '100%',
      opacity: 0,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
    }),
  };

  return (
    <div className='body'>
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
                selectedLink.isActive && selectedLink.index !== index
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
