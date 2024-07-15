import ProductItem from '@/components/ProductItem';
import { Button } from '@/components/ui/button';
import { ChevronLeft, FilePenLine } from 'lucide-react';
import React from 'react';
import AddItem from './_sections/AddItem';

export default function StoreFrontDetailPage() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2 cursor-pointer'>
          <ChevronLeft size={32} />
          <h3 className='text-2xl font-medium text-black'>
            Summertime Favorites
          </h3>
          <div className='p-2 bg-white rounded-full shadow-sm'>
            <FilePenLine size={16} />
          </div>
        </div>

        <Button className='bg-black'>Save changes and update</Button>
      </div>

      <div className='flex gap-5 mt-5 flex-wrap'>
        <AddItem />
        <ProductItem
          image='/images/prod-1.png'
          title='Rare Beauty by Selena Gomez'
          productName='Soft Pinch Luminous Powder Blush'
        />
        <ProductItem
          image='/images/prod-2.png'
          title='Crown Affair'
          productName='The Hair Oil'
        />
      </div>
    </div>
  );
}
