import { Button, Icon } from '@vibe/core';
import { Add, Favorite, Home, MyWeek, Work, Workspace } from "@vibe/icons";
import BoardList from './board/board';
import FavoriteList from './favorite/favorite';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import LinkButton from './button/link';
import GroupButton from './button/group';
import OptionButton from './button/option';
import { IBoard } from '../../../models/board/board';
import ModalB from './modal/modal';

const Side = () => {

  const [isSideOpen, setIsSideOpen] = useState(false);


const toggleSide = () => {
  setIsSideOpen(!isSideOpen);
};

  const [expandedSection, setExpandedSection] = useState<'workspaces' | 'favorites'>('workspaces');
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => { setShowModal(false); }
  const handleCreateBoard = (board: IBoard) => {
    console.log("New board created:", board);
  }

  useEffect(() => {
    const updateHeight = () => {
      if (sidebarRef.current) {
        setSidebarHeight(sidebarRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', updateHeight);
    updateHeight();
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const toggleSection = (section: 'workspaces' | 'favorites') => {
    if (expandedSection === section) {
      setExpandedSection('workspaces');
    } else {
      setExpandedSection(section);
    }
  };

  const availableHeight = sidebarHeight - 245;

  return (
    <aside ref={sidebarRef} className={`fixed top-0 left-0 z-20 w-64 h-screen mt-12 sm:translate-x-0 rounded transition-transform ${ isSideOpen ? 'sm:translate-x-0' : '-translate-x-full'}`} >
      <div className=' flex flex-col h-screen bg-[#f8f9fc] rounded-tr-lg'>
        <div className='flex flex-col gap-0.5 py-1 px-3 border-b border-solid border-[#d0d4e4]'>
          <LinkButton route={"/"} label="Inicio" icon={Home}/>
          <LinkButton route={"/company"} label="Empresa" icon={Work}/>
          <LinkButton route={"/my_work"} label="Mi trabajo" icon={MyWeek}/>
        </div>
        <div className='flex flex-col gap-0.5 py-1 px-3 border-b border-solid border-[#d0d4e4]'>
          <OptionButton label="Favoritos" icon={Favorite} iconColor={expandedSection === 'favorites' ? 'fill-current text-yellow-500' : ''} onClick={() => toggleSection('favorites')}/>
          {expandedSection === 'favorites' && (
            <div className="overflow-y-auto scroll" style={{ height: availableHeight, maxHeight: availableHeight }}>
              <FavoriteList/>
            </div>
          )}
        </div>
        <div className='flex flex-col gap-0.5 py-1 px-3'>
          <GroupButton label="Espacios de trabajo" icon={Workspace} onClick={() => toggleSection('workspaces')} expandedSection={expandedSection}>
            <Button kind='tertiary' size='xs' onClick={handleOpenModal} noSidePadding className='px-1'>
              <Icon icon={Add} iconSize={16}/>
            </Button>
            <ModalB showModal={showModal} onClose={handleCloseModal} onCreateBoard={handleCreateBoard}/>
          </GroupButton>
          {expandedSection === 'workspaces' && (
            <div className="overflow-y-auto scroll pr-3 -mr-3" style={{ maxHeight: availableHeight, height: availableHeight }}>
              <BoardList/>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Side;