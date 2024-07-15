import Header from '@/components/layout/manage/Header';
import React, { PropsWithChildren } from 'react';

export default function LayoutManage({ children }: PropsWithChildren) {
  return (
    <div className='flex flex-col h-dvh'>
      <Header />
      <div className='p-10 bg-[#f7f7f7] flex-auto overflow-auto'>{children}</div>
    </div>
  );
}
