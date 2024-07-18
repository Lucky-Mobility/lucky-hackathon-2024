'use client';
import React, { useState } from 'react';
import StoreFrontItem from './_sections/StoreFrontItem';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { STORE_FRONT_LIST } from '@/mocks/storefont-list';
import { TStoreItem } from '@/types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const reorder = (list: TStoreItem[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default function StoreFrontPage() {
  const [state, setState] = useState<TStoreItem[]>(STORE_FRONT_LIST);

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const data = reorder(state, result.source.index, result.destination.index);

    console.info('data', data);
    setState(data);
  };

  return (
    <div className='w-full flex flex-col gap-5'>
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
      <div className='flex-auto overflow-auto'>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId='list'>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <ListStoreFront data={state} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

const ListStoreFront = React.memo(function ({ data }: { data: TStoreItem[] }) {
  return data.map((item, index) => (
    <StoreFrontItem key={item.id + ''} data={item} index={index} />
  ));
});
