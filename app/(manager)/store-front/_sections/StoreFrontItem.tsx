'use client';
import { IconProduct } from '@/assets/icons/Icons';
import { Button } from '@/components/ui/button';
import { TStoreItem } from '@/types';
import { formatShortNumberPrice } from '@/utils/functions';
import { GripVertical, Link2, MousePointerClick } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const CopyLink = ({ data }: { data: string }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data);
    } catch (error) {}
  };
  return (
    <Button
      onClick={handleCopy}
      variant='outline'
      className='border-[2px] border-black flex items-center gap-2 h-[30px] px-3 font-bold'
    >
      <Link2 />
      Copy list link
    </Button>
  );
};

const Product = ({ data }: { data: number }) => {
  return (
    <div className='flex items-center'>
      <IconProduct />
      <p className='text-sm tracking-tighter'>{data} products</p>
    </div>
  );
};

const Click = ({ data }: { data: number }) => {
  return (
    <div className='flex items-center'>
      <MousePointerClick />
      <p className='text-sm tracking-tighter'>
        {formatShortNumberPrice(data)} clicks
      </p>
    </div>
  );
};

const StoreFrontItem = ({
  data,
  index,
}: {
  data: TStoreItem;
  index: number;
}) => {
  return (
    <Draggable draggableId={data.id + ''} index={index}>
      {(provided) => (
        <div
          className='flex w-full rounded-sm shadow-sm bg-white py-5 pl-3.5 pr-5 justify-between'
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className='left-side flex items-center gap-2'>
            <GripVertical stroke='#909090' />
            <p className='text-lg font-bold text-black'>{data.title}</p>
          </div>

          <div className='right-side flex items-center max-w-[530px] flex-auto justify-between'>
            <CopyLink data={data.link} />
            <Product data={data.totalProducts} />
            <Click data={data.totalClicks} />
            <Link
              href={`/store-front/${data.id}`}
              className='border-[2px] border-black flex items-center gap-2 h-[30px] px-3 font-bold rounded-sm'
            >
              Detail
            </Link>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default StoreFrontItem;
