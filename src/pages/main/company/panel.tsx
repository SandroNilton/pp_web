  import { Button, Heading, Icon, IconButton, Search, Tooltip } from "@vibe/core";
  import React, { useContext, useState } from "react";
  import ModalC from "./modal/modal";
  import { ICompany } from "../../../models/company";
  import { Comment, Info } from "@vibe/icons";
  import { Tab, TabList, TabPanel, Tabs } from "../../../components/common/tab/Tabs";
  import TableView from "./table/table";
  import ChartView from "./chart/chart";
  import CalendarView from "./calendar/calendar";
  import { RootStoreContext } from '../../../stores/rootStore';


  const Panel = () => {
      const rootStore = useContext(RootStoreContext);
    
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => { setShowModal(false); }
    const handleCreateCompany = (company: ICompany) => {
      console.log("New company created:", company);
      rootStore.companyStore.loadGlobal();
    }

    return (
      <div className="max-h-full rounded-t-lg bg-white outline-none text-[#323338]"> 
        <Tabs defaultIndex={0}>
          <div className="scroll-pt-[250px] contain-layout relative cursor-default flex-col h-full flex select-none scroll overflow-auto overflow-y-scroll" style={{ height: 'calc(100vh - 3rem)' }}>
            <div className="mr-0 top-0 left-0 sticky z-[3000] bg-white rounded-t-lg">
              <div className="relative">
                <div className="">
                  <div className="px-[30px] pt-[18px] pb-0">
                    <div className="relative">
                      <div className="w-full gap-x-[16px] ">
                        <div className="justify-between flex items-center pb-3 gap-1.5">
                          <Heading className="flex gap-3 items-center ">
                            Empresas
                            <div>
                              <Tooltip content="Mira todas las empresas"> 
                                <Icon iconSize={20} icon={Info} className="mt-1"/>
                              </Tooltip>
                            </div>
                          </Heading>
                          <div className="flex gap-1.5">
                            <IconButton size="small" icon={Comment}></IconButton>
                          </div>
                        </div>
                        <div className="border-b-[1px] border-solid border-b-[var(--ui-border-color)]">
                          <TabList>
                            <Tab index={0}>Tabla</Tab>
                            <Tab index={1}>Grafico</Tab>
                            <Tab index={2}>Calendario</Tab>
                          </TabList>
                        </div>
                        <div className="h-16 w-full flex items-center">
                          <div className="w-full">
                            <div className="border-none flex px-0 py-4">
                              <div className="p-0 m-0 flex items-center justify-start w-full">
                                <div className="mr-[14px]">
                                  <Button size="small" onClick={handleOpenModal}>Elemento nuevo</Button>
                                  <ModalC showModal={showModal} onClose={handleCloseModal} onCreateCompany={handleCreateCompany}/>
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
              <div className="h-max w-max mt-0 box-content pl-2">
                <div className="w-full h-full outline-none relative">
                  <TabPanel index={0}>
                    <TableView/>
                  </TabPanel>
                  <TabPanel index={1}>
                    <ChartView/>
                  </TabPanel>
                  <TabPanel index={2}>
                    <CalendarView/>
                  </TabPanel>
                </div>
              </div>
            </div>
          </div>
        </Tabs>
      </div>
    );
  };
/*
  <div className="px-8 py-2 flex overflow-x-auto justify-between gap-3">
            <div className="flex gap-3">
              <Button size="small" onClick={handleOpenModal}>Elemento nuevo</Button>
              <ModalC showModal={showModal} onClose={handleCloseModal} onCreateCompany={handleCreateCompany}/>
              
              {/* 
              
              <Search size="small" placeholder="Buscar" value={searchQuery} onChange={(value: string) => setSearchQuery(value)}/>

              *//*}
            </div>
          </div>        */

  export default Panel