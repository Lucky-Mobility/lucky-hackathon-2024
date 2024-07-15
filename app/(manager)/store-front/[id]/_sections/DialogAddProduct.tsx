import ProductItem from '@/components/ProductItem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

type PropsDialogAddProduct = {
  open: boolean;
  onClose: VoidFunction;
};
const DialogAddProduct = ({ open, onClose }: PropsDialogAddProduct) => {
  return (
    <Dialog
      open={open}
      onOpenChange={(status) => {
        !status && onClose();
      }}
    >
      <DialogContent className='max-w-[830px] pb-0'>
        <DialogHeader>
          <DialogTitle>Add product(s)</DialogTitle>
          <DialogDescription className='hidden'>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Input className='rounded-3xl focus-within:ring-0' placeholder='Search' />

        <ScrollArea className='h-[480px] w-full'>
          <div className='grid grid-cols-4 mt-3 gap-x-5 gap-y-5 mb-3'>
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
            <ProductItem
              image='/images/prod-1.png'
              title='Glow Recipe'
              productName='Mini Watermelon Glow Niacinamide Dew Drops'
              btn='Add to list'
              className='border border0-[#dcdcdc]'
            />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddProduct;
