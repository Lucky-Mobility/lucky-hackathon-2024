import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

type PropsProductItem = {
  image: string;
  productName: string;
  title: string;
  attributes?: string[];
  btn?: string;
  className?: string;
};

const ProductItem = ({
  image,
  productName,
  title,
  attributes,
  btn,
  className,
}: PropsProductItem) => {
  return (
    <div
      className={cn(
        'rounded-sm shadow-sm p-4 w-[180px] bg-white flex items-center justify-between flex-col',
        className
      )}
    >
      <Image
        src={image}
        alt='img'
        width={124}
        height={124}
        className='object-contain w-[124px] h-[124px]'
      />
      <p className='text-xs text-black text-center mt-2'>{title}</p>
      <p className='text-xs font-bold text-balance text-center mt-2 h-[39px] line-clamp-3'>
        {productName}
      </p>
      {attributes && (
        <div className='w-full flex flex-col gap-1 mt-3.5'>
          {attributes?.map((attribute, key) => (
            <div
              key={key}
              className='flex items-center gap-2 rounded-md p-1 bg-[#CCEAAE]'
            >
              <Plus size={16} />
              <span className='text-xs font-semibold text-black'>
                {attribute}
              </span>
            </div>
          ))}
        </div>
      )}

      {btn && <Button variant='outline' className='border-black h-[28px] text-black text-sm mt-[19px]'>{btn}</Button>}
    </div>
  );
};

export default ProductItem;
