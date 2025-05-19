import { Button, Icon, IconProps } from '@vibe/core';
import React from 'react';

interface GroupProps {
  label: string;
  icon: IconProps['icon'];
  iconColor?: string;
  expandedSection?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const GroupButton: React.FC<GroupProps> = ({ icon, label, expandedSection, iconColor, onClick, children }) => {

  const isExpanded = expandedSection === "favorites" ;

  return (
    <div className={`gap-3 justify-between w-full items-center leading-6 h-8 rounded px-[8px] pr- content-center flex ${ isExpanded ? " hover:cursor-pointer hover:bg-[var(--primary-background-hover-color)]" : "" } `} onClick={onClick}>
      <div className='flex content-center items-center justify-start gap-3 font-normal text-[#323338]'>
        <Icon icon={icon} className={`${iconColor}`} iconSize={17} />
        <div className='text-[14px] labelgroup'>{label}</div>
      </div>
      {children && <div className="flex items-center gap-3">{children}</div>}
    </div>
  );

}

export default GroupButton;