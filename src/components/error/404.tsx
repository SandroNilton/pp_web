import { Heading, Text } from '@vibe/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[calc(100vh-3rem)] gap-3 px-8'>
      <img src='https://cdn.monday.com/images/404_error.png' width={146} height={174} alt='Not Found'/>
      <Heading type='h2' align='center' className='whitespace-normal'>No hemos podido encontrar el contenido que buscabas</Heading>
      <Text type='text2' align='center' className='whitespace-normal font-poppins'>
        Rastreamos estos errores automáticamente, pero si el problema vuelve a ocurrir.</Text>
        <Link to="/"></Link>
    </div>
  );
};

export default NotFound;