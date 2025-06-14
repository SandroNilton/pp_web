  import { Button, Heading, Icon, IconButton, Search, Tooltip } from "@vibe/core";
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
      <div className="w-full cursor-default flex flex-col select-none">
        <Tabs defaultIndex={0}>
          <div className="top-0 sticky bg-[var(--primary-background-color)]">
            <div className="bg-[var(--primary-background-color)] px-8 pt-4 border-b-[1px] border-solid border-[var(--layout-border-color)]">
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
            <div className="px-8 py-2 flex overflow-x-auto justify-between gap-3">
              <div className="flex gap-3">
                <Button size="small" onClick={handleOpenModal}>Elemento nuevo</Button>
                <ModalC showModal={showModal} onClose={handleCloseModal} onCreateCompany={handleCreateCompany}/>
                <Search size="small" placeholder="Buscar"/>
              </div>
            </div> 
          </div>
            <TabPanel index={0}>
              <TableView/>
            </TabPanel>
            <TabPanel index={1}>
              <ChartView/>
            </TabPanel>
            <TabPanel index={2}>
              <CalendarView/>
            </TabPanel>
          
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