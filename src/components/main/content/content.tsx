import React from 'react';
import { ReactNode } from 'react';

interface ContentProps {
  children: ReactNode;
  isSideOpen: boolean;
}

const Content = ({ children, isSideOpen }: ContentProps) => {
  return (

      <div className={`${ isSideOpen ? 'lg:ml-16' : 'lg:ml-64'} px-2 flex-1`}>
        <main className="mt-12 h-full" style={{ height: 'calc(100vh - 3rem)' }}>   
          {children}
        </main>
      </div>
   
   
  );
}

export default Content;