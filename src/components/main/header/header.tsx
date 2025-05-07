import { Button, IconButton, Text, Tooltip } from '@vibe/core';
import { Apps, Help, Inbox, Invite, Notifications, Search } from "@vibe/icons";
import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {

  return (
    <nav className='fixed top-0 w-full bg-[#eceff8] z-10'>
      <div className='flex items-center justify-between h-12 px-2'>
        <div className='flex gap-1 items-center content-center justify-start rtl:justify-end'>
          <Tooltip content="Inicio" position="bottom" className="flex items-center gap-1">
            <Link to="/">
              <Button  kind="tertiary" className="flex items-center font-poppins font-medium">
                  PP
              </Button>
            </Link>
          </Tooltip>
        </div>
        <div className="items-center flex grow justify-end gap-2">
          <IconButton tooltipContent='Notificaciones' icon={Notifications}/>
          <IconButton tooltipContent='Feed de actualizaciones' icon={Inbox} />
          <IconButton tooltipContent='Invitar miembros' icon={Invite}/>
          <IconButton tooltipContent='Mercado de monday' icon={Apps}/>
          <IconButton tooltipContent='Buscar todo' icon={Search}/>
          <IconButton tooltipContent='Ayuda' icon={Help}/>
        </div>
      </div>
    </nav>
  );
}

export default Header;