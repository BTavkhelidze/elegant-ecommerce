'use client';

import { useAnimate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Units = 'Day' | 'Hour' | 'Minute' | 'Second';

interface CountdownProps {
  countdownFrom: string; // Allow passing the countdown date as a prop
}

const Countdown: React.FC<CountdownProps> = ({ countdownFrom }) => {
  return (
    <div className='bg-gradient-to-b'>
      <div className='mx-auto flex w-full max-w-5xl items-center bg-white'>
        <CountdownItem unit='Day' text='days' countdownFrom={countdownFrom} />
        <CountdownItem unit='Hour' text='hours' countdownFrom={countdownFrom} />
        <CountdownItem
          unit='Minute'
          text='minutes'
          countdownFrom={countdownFrom}
        />
        <CountdownItem
          unit='Second'
          text='seconds'
          countdownFrom={countdownFrom}
        />
      </div>
    </div>
  );
};

const CountdownItem = ({
  unit,
  text,
  countdownFrom,
}: {
  unit: Units;
  text: string;
  countdownFrom: string;
}) => {
  const { ref, time } = useTimer(unit, countdownFrom);

  return (
    <div className='flex h-24 w-1/4 flex-col items-center justify-center gap-1 border-r-[1px] border-slate-200 font-mono md:h-36 md:gap-2'>
      <div className='relative w-full overflow-hidden text-center'>
        <span ref={ref} className='block text-3xl font-medium   xl:text-4xl'>
          {time}
        </span>
      </div>
      <span className='text-xs font-light text-slate-500 md:text-sm lg:text-base'>
        {text}
      </span>
    </div>
  );
};

export default Countdown;

// Timer hook to handle countdown logic
const useTimer = (unit: Units, countdownFrom: string) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState('00'); // Store time as a string to handle padding

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, [countdownFrom]);

  const handleCountdown = async () => {
    const end = new Date(countdownFrom); // Use the passed countdownFrom value
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === 'Day') {
      newTime = Math.floor(distance / DAY);
    } else if (unit === 'Hour') {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === 'Minute') {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ['0%', '-50%'], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;

      // Pad the number with a leading zero if necessary
      const formattedTime = String(newTime).padStart(2, '0'); // Add leading zero if needed

      setTime(formattedTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ['50%', '0%'], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
