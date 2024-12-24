import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import emailSvg from '@/utility/images/svg/email.svg';
import Image from 'next/image';
import { Label } from '../ui/label';

export function EmailInput() {
  return (
    <div className='flex w-full max-w-sm items-center justify-center space-x-2 border-b border-b-[#6c7275] pb-3'>
      <Label
        htmlFor='email'
        className='w-8 h-6 flex items-center justify-center'
      >
        <Image src={emailSvg} alt='email icon' className='w-full h-full' />
      </Label>
      <Input
        type='email'
        id='email'
        placeholder='Email adress'
        className='flex-4 outline-none placeholder:text-[#6c7275] border-0 bg-transparent focus:border-0'
      />
      <Button type='submit' variant='ghost' className='flex-1'>
        Signup
      </Button>
    </div>
  );
}
