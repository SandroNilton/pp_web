import React, { useContext, useState } from "react";
import { ICompany } from '../../../../models/company/company';
import { HeadquartersTable } from "./headquartersTable";
import { Button, EditableHeading, IconButton, Text } from '@vibe/core';
import { DropdownChevronDown, DropdownChevronRight, Menu } from "@vibe/icons";
import { IHeadquarter } from "../../../../models/company/headquarter";
import { RootStoreContext } from "../../../../stores/rootStore";
import ModalH from "../modal/modalH";

interface Props {
  company: ICompany;
}

export const CompanySection: React.FC<Props> = ({ company }) => {

  const [isOpen, setIsOpen] = useState(true);
  const rootStore = useContext(RootStoreContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const handleOpenModal = (id: string) => {
    setShowModal(true);
    setSelectedCompanyId(id);
  }
  const handleCloseModal = () => { 
    setShowModal(false);
    setSelectedCompanyId(null);
  }
  const handleCreateHeadquarter = (headquarter: IHeadquarter) => {
    console.log("New headquarter created:", headquarter);
    rootStore.companyStore.loadGlobal();
  }

  return (
    <div>
      <div className="flex gap-2 items-center sticky w-full">
        <div>
          <IconButton size="xs" className="mr-0.5 ml-2" icon={Menu}></IconButton>
        </div>
        <div className="flex-grow-[5]">
          <div className="h-10 flex items-center ml-1.5 gap-2">
            <IconButton size="small" icon={ isOpen ? DropdownChevronDown : DropdownChevronRight } onClick={ () => setIsOpen(!isOpen) } tooltipContent="Contraer grupos"></IconButton>
            <EditableHeading type="h3" weight="medium" value={company.name}></EditableHeading>
            <div className="flex items-center">
              <Text className="text-[--secondary-text-color]">{ company.headquarters?.length && company.headquarters.length > 0 ? company.headquarters.length : 'No' } Sedes</Text>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="pl-12">
          {company.headquarters && company.headquarters.length > 0 ? (
            <div className="gap-y-3">
              <HeadquartersTable headquarters={company.headquarters} />
              <Button size="small" onClick={ () => handleOpenModal(company.id)}>Nueva sede</Button>
            </div>
          ) : (
            <Button size="small" onClick={ () => handleOpenModal(company.id)}>Nueva sede</Button>
          )}
        </div>
      )}

      <ModalH showModal={showModal} onClose={handleCloseModal} onCreateHeadquarter={handleCreateHeadquarter} company={selectedCompanyId ?? ""}/>

    </div>
  );
}
  