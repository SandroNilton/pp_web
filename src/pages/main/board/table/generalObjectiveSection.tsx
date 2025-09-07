import React, { useState } from "react";
import { EditableHeading, Heading, IconButton, Text } from '@vibe/core';
import { DropdownChevronDown, DropdownChevronRight, Menu } from "@vibe/icons";
import { IGeneralObjective } from "../../../../models/board/generalObjective";
import { SpecificObjectivesTable } from './specificObjectiveTable';

interface Props {
  generalObjective: IGeneralObjective; 
}

export const GeneralObjectiveSection: React.FC<Props> = ({ generalObjective }) => {

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
            <EditableHeading type="h3" weight="medium" value={generalObjective.name}></EditableHeading>
            <div className="flex items-center gap-3">
              <Text className="text-[--secondary-text-color]">{ generalObjective.specificObjectives?.length && generalObjective.specificObjectives.length > 0 ? generalObjective.specificObjectives.length : 'No' } Objetivos especificos</Text>
              <div>|</div>
              <Text className="text-[--secondary-text-color]">{ generalObjective.jobs?.length && generalObjective.jobs.length > 0 ? generalObjective.jobs.length : 'No' } Tareas</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-12">

        {isOpen && (
          <div>
            <Text type="text1" weight="medium" color="secondary">Objetivos Especificos</Text>
            { generalObjective.specificObjectives && generalObjective.specificObjectives.length > 0 ? (
              <SpecificObjectivesTable specificObjectives={generalObjective.specificObjectives} /> ) : (
              <div>Sin objetivos especificos registrados</div>
            ) }
          </div>
          )}

        {isOpen && (
          <div>
            <Text type="text1" weight="medium" color="secondary">Tareas</Text>
            { generalObjective.specificObjectives && generalObjective.specificObjectives.length > 0 ? (
              <div></div> ) : (
              <div>Sin objetivos especificos registrados</div>
            ) }
          </div>
        )}
        
      </div>
    </div>
  );
}