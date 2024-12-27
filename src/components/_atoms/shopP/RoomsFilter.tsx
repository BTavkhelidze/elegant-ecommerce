import * as React from 'react';
import clsx from 'clsx';

import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

interface RoomsFilterProps {
  category: string;
  useCategory: (category: string) => void;
}

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

export function RoomsFilter({ category, useCategory }: RoomsFilterProps) {
  return (
    <ScrollArea className='h-72 w-48'>
      <div className='py-4'>
        <div className='flex flex-col items-start'>
          {tags.map((tag) => (
            <React.Fragment key={tag}>
              <div
                className={clsx(
                  'text-sm cursor-pointer text-left',
                  category === tag
                    ? 'border-b border-b-[#121212] text-[#121212]'
                    : 'text-[#807e7e]'
                )}
                onClick={() => useCategory(tag)}
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
