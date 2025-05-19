  import { Button, Heading, IconButton, Search, Text } from "@vibe/core";
  import { Calendar, Chart, Comment, Home, Settings } from "@vibe/icons";
  import React, { useEffect, useState } from "react";

  import TableView from "./table/table";
  import CalendarView from "./calendar/calendar";
  import ModalC from "./modal/modal";
  import { ICompany } from "../../../models/company";
  import ChartView from "./chart/chart";
import { TabsProvider } from "../../../components/common/tab/TabsContext";
import { TabList, Tab } from "../../../components/common/tab/Tabs";
import { TabPanel, TabPanels } from "../../../components/common/tab/TabPanels";

  const Panel = () => {

    const [activeTabId, setActiveTabId] = React.useState(0);
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => { setShowModal(false); }

    const handleCreateCompany = (company: ICompany) => {
      //setCompanies([...companies, company])
      /*loadCompanies();*/
      console.log(company)
    }

    const handleTabChange = (index: number) => {
      console.log("Tab seleccionado:", index);
    };

    return (
      <div className="w-full cursor-default flex flex-col select-none">
        <div className="top-0 sticky bg-[var(--primary-background-color)] ">
          <div className=" bg-[var(--primary-background-color)] px-8 pt-4 border-b border-solid border-[var(--layout-border-color)]">
            <div className="justify-between flex items-center pb-3 gap-8" style={{ position: 'relative', zIndex: 100 }}>
              {/*<Heading>Empresas</Heading>
              <div className="flex gap-1.5">
                <IconButton size="small" icon={Comment  }></IconButton>
                <IconButton size="small" icon={Settings}></IconButton>
              </div>*/}
            </div>
            <div>
              {/*<TabList onTabChange={(newTabId) => setActiveTabId(newTabId)} size="sm" className="to-inherit overflow-y-hidden overflow-x-auto">
                <Tab key={"TabTableView_0"} value={0} icon={Home}><Text>Tabla Principal</Text></Tab>
                <Tab key={"TabChartView_1"} value={1} icon={Chart}><Text>Grafico</Text></Tab>
                <Tab key={"TabChartView_2"} value={2} icon={Calendar}><Text>Calendario</Text></Tab>
              </TabList>*/}
            </div>

            <TabsProvider onTabChange={handleTabChange}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab enabled={false}>Tab 2 (disabled)</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 6</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 3</Tab>
        <Tab>Tab 9</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>Contenido Tab 1</TabPanel>
        <TabPanel>Contenido Tab 2</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 4</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
        <TabPanel>Contenido Tab 3</TabPanel>
      </TabPanels>
    </TabsProvider>

          </div>
          <div className="px-8 py-2 flex overflow-x-auto justify-between gap-3">
            <div className="flex gap-3">
              <Button size="small" onClick={handleOpenModal}>Elemento nuevo</Button>
              <ModalC showModal={showModal} onClose={handleCloseModal} onCreateCompany={handleCreateCompany}/>
              
              {/* 
              
              <Search size="small" placeholder="Buscar" value={searchQuery} onChange={(value: string) => setSearchQuery(value)}/>

              */}
            </div>
          </div>        
        </div>
      
        <div>
          {/*<TabPanels activeTabId={activeTabId} className="h-full w-full basis-0 px-[30px] pb-[40px]">
            <TabPanel>
            <TableView/>
              {/* <TableView loading={loading} companies={filteredCompanies}/> 
            </TabPanel>
            <TabPanel>
              <ChartView/>
            </TabPanel>
            <TabPanel>
              <CalendarView/>
            </TabPanel>
          </TabPanels>*/}
        </div>
      </div>
    );
  };

  export default Panel