import { Button, Text } from '@vibe/core';
import { Link, useLocation } from "react-router-dom";
import React from 'react';

interface ItemProps {
  route: string;
  label: string;
  isSideOpen : boolean;
}

const Item: React.FC<ItemProps> = ({ route, label }) => {

  const location = useLocation();

  return (
    <Link to={route}>
      <Button className={`gap-3 w-full flex items-center`} size="small" kind="tertiary" active={location.pathname === route}>
        <Text maxLines={1} ellipsis={true} className='w-full'>{label}</Text>
      </Button>
    </Link>
  );
}

export default Item;