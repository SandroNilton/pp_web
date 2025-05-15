import { Button, Icon, IconProps } from '@vibe/core';
import { Link, useLocation } from "react-router-dom";
import React from 'react';

interface ItemSideProps {
  route?: string;
  label: string;
  icon: IconProps['icon'];
  iconColor?: string;
  onClick?: () => void;
}

const ItemSide: React.FC<ItemSideProps> = ({ route, icon, label, iconColor, onClick }) => {

  const location = useLocation();

  if (!route) {
    return (
      <Button preventClickAnimation className={`gap-3 justify-between w-full items-center`} size="small" kind="tertiary" onClick={onClick}>
        <div className='flex content-center items-center gap-3'>
          <Icon icon={icon} className={`${iconColor}`} iconSize={18} />
          <div>{label}</div>
        </div>
      </Button>
    );
  }

  return (
    <Link to={route}>
      <Button className={`gap-3 justify-start flex w-full items-center`} size="small" kind="tertiary" active={location.pathname === route} onClick={onClick}>
        <Icon icon={icon} iconSize={18}/>
        {label}
      </Button>
    </Link>
  );
}


 {/*<Button kind='tertiary' size='xs' onClick={alert} noSidePadding className='px-1'>
          <Icon icon={Add} iconSize={16}/>
        </Button>*/}

export default ItemSide;