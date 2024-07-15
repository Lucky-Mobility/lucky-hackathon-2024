import React from 'react';
import StoreFrontItem from './_sections/StoreFrontItem';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { STORE_FRONT_LIST } from '@/mocks/storefont-list';

export default function StoreFrontPage() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl font-medium text-black'>Storefront List</h3>

        <div className='flex items-center gap-3'>
          <Input
            placeholder='Search'
            className='rounded-3xl border-0 w-[280px]'
          />
          <Button className='bg-black px-5'>
            <Plus />
            New List
          </Button>
        </div>
      </div>
      <div className='mt-8 flex flex-col gap-3'>
        {STORE_FRONT_LIST.map((item, key)=>  <StoreFrontItem key={key} data={item} />)}
      </div>
    </div>
  );
}
