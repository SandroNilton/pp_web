  import { AlertBanner, Button, Heading, Icon, IconButton, Search, Tooltip } from "@vibe/core";
  import React, { useState } from "react";
  import ModalC from "./modal/modal";
  import { ICompany } from "../../../models/company";
  import { Comment, Info } from "@vibe/icons";
  import { Tab, TabList, TabPanel, Tabs } from "../../../components/common/tab/Tabs";
  import TableView from "./table/table";
  import ChartView from "./chart/chart";
  import CalendarView from "./calendar/calendar";

  const Panel = () => {
    const [showModal, setShowModal] = useState(false);
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => { setShowModal(false); }
    const handleCreateCompany = (company: ICompany) => {
      //setCompanies([...companies, company])
      /*loadCompanies();*/
      console.log(company)
    }

    return (
      <div className="h-full bg-white w-full rounded-t-lg outline-none text-[#323338]">
        <Tabs defaultIndex={0}>
          <div className="scroll-pt-[250px] contain-layout relative cursor-default flex-col h-full flex select-none overflow-auto overflow-y-scroll">
            {/*<div className="left-0">
              <div id="board-header-banner" className="flex sticky items-center mr-0">
                <AlertBanner ariaLabel="hola" className="rounded-t-lg " closeButtonAriaLabel="x"></AlertBanner>
              </div>
            </div>*/}
            <div className="mr-0 top-0 left-0 sticky z-[3000]">
              <div className="relative">
                <div className="">
                  <div className="px-[30px] pt-[18px] pb-0">
                    <div className="relative border-b-[1px] border-solid border-b-[var(--ui-border-color)]">
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
                        <TabList>
                          <Tab index={0}>Tabla</Tab>
                          <Tab index={1}>Grafico</Tab>
                          <Tab index={2}>Calendario</Tab>
                        </TabList>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              
             
            </div>
            <div className="px-8 py-2 flex overflow-x-auto justify-between gap-3">
              <div className="flex gap-3">
                <Button size="small" onClick={handleOpenModal}>Elemento nuevo</Button>
                <ModalC showModal={showModal} onClose={handleCloseModal} onCreateCompany={handleCreateCompany}/>
                <Search size="small" placeholder="Buscar"/>
              </div>
            </div> 

            <div className="grow">
            <div className="mr-0 mt-0 box-content pb-10 pl-10">
              <div className=" h-full w-full">
                <div className=" w-full h-full ">
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