import ProductItem from '@/components/ProductItem';
import React from 'react';

export default function PromotionsPage() {
  return (
    <div>
      <div className='flex items-start flex-col'>
        <h3 className='text-2xl font-medium text-black'>Promotions</h3>

        <p className='text-sm text-[#606060]'>
          Accepting a promotion will send the product to your address on file.
        </p>
      </div>

      <div className='flex gap-5 flex-wrap mt-6'>
        <ProductItem
          image='/images/prod-1.png'
          title='Beauty blender'
          productName='ORIGINAL Beautyblender Makeup Sponge'
          attributes={['Gifted product', '10% commission']}
          btn='Accept'
        />

        <ProductItem
          image='/images/prod-2.png'
          title='Dior'
          productName='Backstage Concealer'
          attributes={['Gifted product', '10% commission']}
          btn='Accept'
        />
      </div>
    </div>
  );
}
