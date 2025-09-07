import { Button, EditableHeading, IconButton, Search, Text } from "@vibe/core";
import TableView from "./table/table";
import ChartView from "./chart/chart";
import GanttView from "./gantt/gantt";
import React, { useContext, useEffect, useState } from "react";

import { RouteComponentProps } from 'react-router-dom';
import { Tab, Tabs,TabList, TabPanel } from "../../../components/common/tab/Tabs";
import { RootStoreContext } from '../../../stores/rootStore';
import { observer } from 'mobx-react';
import { IGeneralObjective } from "../../../models/board/generalObjective";
import ModalGO from "./modal/modal";

interface MatchParams {  
  id: string;
}

const Panel = ({ match }: RouteComponentProps<MatchParams>) => {

  const rootStore = useContext(RootStoreContext);
  const { boardViews, loadViewBoard } = rootStore.boardViewStore;
  const { board, getDetail } = rootStore.boardStore;

  const { id } = match.params;
  const [activeTabId, setActiveTabId] = React.useState(0);

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => { setShowModal(false); }
  const handleCreateGeneralObjective = (generalObjective: IGeneralObjective) => {
    console.log("New general objective created:", generalObjective);
    rootStore.companyStore.loadGlobal();
  }

  useEffect(() => {
    getDetail(id);
    loadViewBoard(id); 
  }, [id]);

  useEffect(() => {
    setActiveTabId(0);
  }, [boardViews]);

  return (
    <div className="max-h-full rounded-t-lg bg-white outline-none text-[#323338]"> 
      <Tabs defaultIndex={activeTabId}>
        <div className="scroll-pt-[250px] contain-layout relative cursor-default flex-col h-full flex select-none scroll overflow-auto overflow-y-scroll" style={{ height: 'calc(100vh - 3rem)' }}>
          <div className="mr-0 top-0 left-0 sticky z-[3000] bg-white rounded-t-lg">
           <div className="relative">
              <div className="">
                <div className="px-[30px] pt-[18px] pb-0">
                  <div className="relative">
                    <div className="w-full gap-x-[16px]">
                      <div className="justify-between flex items-center pb-3 gap-1.5">
                        <EditableHeading type="h2" key={id} value={board?.name || ""}/>
                      </div>
                      <div className="border-b-[1px] border-solid border-b-[var(--ui-border-color)]">
                        <TabList>
                          {boardViews.map(view => (
                            <Tab key={view.id} index={view.index}>{view.name}</Tab>
                          ))}
                        </TabList>
                      </div>
                      <div className="h-16 w-full flex items-center">
                        <div className="w-full">
                          <div className="border-none flex px-0 py-4">
                            <div className="p-0 m-0 flex items-center justify-start w-full">
                              <div className="mr-[14px]">
                                <Button size="small" onClick={handleOpenModal}>Nuevo ojetivo general</Button>
                                <ModalGO showModal={showModal} onClose={handleCloseModal} onCreateGeneralObjective={handleCreateGeneralObjective} board={id}/>
                              </div>
                              <div className="ml-0 w-full flex-1 overflow-x-auto scroll">
                                <div className="flex items-center gap-3 w-max"> 
                                  <Search size="small" placeholder="Buscar"/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grow">
            {/* - <div className="h-max w-max mt-0 box-content pl-2"> - */}
            <div className="h-max w-full mt-0 box-content">
              <div className="w-full h-full outline-none relative">
                <TabPanel index={0}>
                  <TableView board={id}/>
                </TabPanel>
                <TabPanel index={1}>
                  <ChartView/>
                </TabPanel>
                <TabPanel index={2}>
                  <GanttView/>
                </TabPanel>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default observer(Panel);