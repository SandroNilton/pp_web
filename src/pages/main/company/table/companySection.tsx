import React, { useState } from "react";
import { ICompany } from '../../../../models/company';
import { HeadquartersTable } from "./headquartersTable";
import { EditableHeading, IconButton, Text } from '@vibe/core';
import { DropdownChevronDown, DropdownChevronRight, Menu } from "@vibe/icons";

interface Props {
  company: ICompany;
}

export const CompanySection: React.FC<Props> = ({ company }) => {

  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <div className="flex gap-2 items-center sticky w-full">
        <div>
          <IconButton size="xs" className="mr-0.5 ml-2" icon={Menu}></IconButton>
        </div>
        <div className="flex-grow-[5]">
          <div className="h-10 flex items-center ml-1.5 gap-2">
            <IconButton  size="small" icon={ isOpen ? DropdownChevronDown : DropdownChevronRight } onClick={ () => setIsOpen(!isOpen) } tooltipContent="Contraer grupos"></IconButton>
            <EditableHeading type="h3" weight="medium" value={company.name}></EditableHeading>
            <div className="flex items-center">
              <Text className="text-[--secondary-text-color]">{ company.headquarters?.length && company.headquarters.length > 0 ? company.headquarters.length : 'No' } Sedes</Text>
            </div>
          </div>
        </div>
      </div>
      

      {isOpen && (
        <div>
          {company.headquarters && company.headquarters.length > 0 ? (
            <HeadquartersTable headquarter={company.headquarters} />
          ) : (
            /*<em>Sin sedes registradas</em>*/
            <HeadquartersTable headquarter={[]} />
          )}
        </div>
      )}
    </div>
  );
}
  