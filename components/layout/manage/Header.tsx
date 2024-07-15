'use client';
import { cn } from '@/lib/utils';
import { paths } from '@/routes/paths';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {
  const pathname = usePathname();
  return (
    <>
      <header className='w-full h-16 bg-white flex items-center justify-between px-10'>
        <h3 className='text-lg text-black'>Storefront Manager</h3>
      </header>
      <div className='w-full bg-black px-10 flex items-center gap-5'>
        <Link
          href={paths.manager.storeFront}
          className={cn(
            'text-sm text-white py-4 flex w-fit',
            pathname.indexOf(paths.manager.storeFront) > -1 &&
              'font-bold border-b-[2px] border-white '
          )}
        >
          Storefront
        </Link>
        <Link
          href={paths.manager.promotions}
          className={cn(
            'text-sm text-white py-4 flex w-fit',
            pathname.indexOf(paths.manager.promotions) > -1 &&
              'font-bold border-b-[2px] border-white '
          )}
        >
          Promotions
        </Link>
      </div>
    </>
  );
};

export default Header;
