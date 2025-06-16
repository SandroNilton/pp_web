import React from 'react';
import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  isSideOpen: boolean;
}

const Content = ({ children, isSideOpen }: ContentProps) => {
  return (
    <div className={`${ isSideOpen ? 'lg:ml-16' : 'lg:ml-64'} px-2 min-w-0 w-full`}>
      <main className="mt-12" style={{ height: 'calc(100vh - 3rem)' }}>
        {children}
      </main>
    </div>
  );
}

export default Content;