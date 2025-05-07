import { Button, Icon, IconProps } from '@vibe/core';
import { Link, useLocation } from "react-router-dom";
import React from 'react';

interface LinkProps {
  route: string;
  label: string;
  icon: IconProps['icon'];
  iconColor?: string;
  onClick?: () => void;
}

const LinkButton: React.FC<LinkProps> = ({ route, icon, label, onClick }) => {

  const location = useLocation();

  return (
    <Link to={route}>
      <Button className={`gap-3 justify-start flex w-full items-center`} size="small" kind="tertiary" active={location.pathname === route} onClick={onClick}>
        <Icon icon={icon} iconSize={18}/>
        {label}
      </Button>
    </Link>
  );
}

export default LinkButton;