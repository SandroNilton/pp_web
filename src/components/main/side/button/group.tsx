import { Button, Icon, IconProps } from '@vibe/core';
import { Add } from '@vibe/icons';
import React from 'react';

interface GroupProps {
  label: string;
  icon: IconProps['icon'];
  iconColor?: string;
  onClick?: () => void;
}

const GroupButton: React.FC<GroupProps> = ({ icon, label, iconColor, onClick }) => {

  return (
    <Button preventClickAnimation className={`gap-3 justify-between w-full items-center`} size="small" kind="tertiary" onClick={onClick}>
      <div className='flex content-center items-center gap-3'>
        <Icon icon={icon} className={`${iconColor}`} iconSize={18} />
        <div>{label}</div>
      </div>
      {/*<Button kind='tertiary' size='xs' onClick={alert} noSidePadding className='px-1'>
        <Icon icon={Add} iconSize={16}/>
      </Button>*/}
    </Button>
  );

}

export default GroupButton;