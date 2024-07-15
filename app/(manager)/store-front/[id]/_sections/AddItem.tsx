'use client';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import DialogAddProduct from './DialogAddProduct';
import DialogAddContent from './DialogAddContent';

const AddItem = () => {
  const [dialogAddProduct, setDialogAddProduct] = useState(false);
  const [dialogAddContent, setDialogAddContent] = useState(false);

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <div className='w-[148px] bg-black cursor-pointer flex items-center justify-center rounded-sm'>
            <Plus size={40} stroke='#fff' />
          </div>
        </PopoverTrigger>
        <PopoverContent
          className='flex flex-col w-[150px] rounded-lg p-2 translate-x-[20px]'
          sideOffset={-90}
        >
          <Button
            variant='ghost'
            className='bg-white hover:bg-[#ededed] outline-none ring-0 border-0 focus-visible:ring-0'
            onClick={() => setDialogAddProduct(true)}
          >
            Add product
          </Button>
          <Button
            variant='ghost'
            className='bg-white hover:bg-[#ededed] outline-none ring-0 focus-visible:ring-0'
            onClick={() => setDialogAddContent(true)}
          >
            Add content
          </Button>
        </PopoverContent>
      </Popover>
      <DialogAddProduct
        open={dialogAddProduct}
        onClose={() => setDialogAddProduct(false)}
      />
      <DialogAddContent
        open={dialogAddContent}
        onClose={() => setDialogAddContent(false)}
      />
    </>
  );
};

export default AddItem;
