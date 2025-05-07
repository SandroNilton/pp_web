import React from 'react';
import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  isSideOpen: boolean;
}

const Content = ({ children, isSideOpen }: ContentProps) => {
  return (
    <div className={`${ isSideOpen ? 'lg:ml-16' : 'lg:ml-64'} h-full px-2`}>
      <div className="w-full bg-white rounded-t-lg mt-12 h-full outline-none overflow-x-hidden grow" style={{ height: 'calc(100vh - 3rem)' }}>
        {children}
      </div>
    </div>
  );
}

export default Content;