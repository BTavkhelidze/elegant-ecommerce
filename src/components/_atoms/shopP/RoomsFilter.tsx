'use client';
import * as React from 'react';
import clsx from 'clsx';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

const tags = [
  'All Rooms',
  'Living Room',
  'Bedroom',
  'Kitchen',
  'Bathroom',
  'Dining',
  'Outdoor',
  'Garden',
  'Storage',
];

export function RoomsFilter() {
  const [selected, setSelected] = useState<string>('All Rooms');

  return (
    <ScrollArea className='h-72 w-48'>
      <div className='py-4'>
        <div className='flex flex-col items-start'>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div
                className={clsx(
                  'text-sm cursor-pointer text-left',
                  selected === tag
                    ? 'border-b border-b-[#121212] text-[#121212]'
                    : 'text-[#807e7e]'
                )}
                onClick={() => setSelected(tag)}
              >
                {tag}
              </div>
              <Separator className='my-2 bg-transparent' />
            </React.Fragment>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
