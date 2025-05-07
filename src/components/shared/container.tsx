import { ReactNode } from 'react';
import React from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {

  return (
    <div className='bg-white border rounded-lg' style={{ boxShadow: '0px 3px 12px #e6e9ef'}}>
      <div className='p-3'>
        {children}
      </div>
    </div>
  );
}

export default Container;
