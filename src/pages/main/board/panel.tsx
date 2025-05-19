import { EditableHeading, IconButton, Tab, TabList, TabPanel, TabPanels, Text } from "@vibe/core";
import { Chart, Favorite, Home, Settings, Timeline } from "@vibe/icons";
import TableView from "./table/table";
import ChartView from "./chart/chart";
import GanttView from "./gantt/gantt";
import React from "react";

import { RouteComponentProps } from 'react-router-dom';

interface MatchParams { 
  id: string;
}

const Panel = ({ match }: RouteComponentProps<MatchParams>) => {
  const { id } = match.params;
  const [activeTabId, setActiveTabId] = React.useState(0);

  return (
    <div className="w-full cursor-default flex flex-col select-none px-[30px] ">
      <div className="top-0 sticky bg-[var(--primary-background-color)] pt-[15px]">
        <div className="justify-between z-50 flex items-center w-full pb-3 gap-8" style={{ position: 'relative', zIndex: 100 }}>
          <EditableHeading type="h2" key={id} value="Empresas casdasd asd  sda assssssssssss ssssss ssss ssdhs shsaha sah saksjdajdja ajsdajj smmdamsmdasm sadm skakdk"/>
          <div className="flex gap-1.5">
            <IconButton size="small" icon={Favorite}></IconButton>
            <IconButton size="small" icon={Settings}></IconButton>
          </div>
        </div>
        <div className="">
          <TabList key={id} onTabChange={(newTabId) => setActiveTabId(newTabId)} size="sm" className="to-inherit border-solid border-b border-[var(--layout-border-color)] overflow-y-hidden overflow-x-auto">
            <Tab key={"tabla"} value={0} icon={Home}><Text>Tabla Principal</Text></Tab>
            <Tab key={"grafico"} value={1} icon={Chart}><Text>Grafico</Text></Tab>
            <Tab key={"time"} value={2} icon={Timeline}><Text>Gantt</Text></Tab>
          </TabList>
        </div>
      </div>
      <div>
        <TabPanels activeTabId={activeTabId} className="box-content h-full w-full flex flex-col basis-0 grow-0 pb-16 z-0">
          <TabPanel>
            <TableView/>
          </TabPanel>
          <TabPanel>
            <ChartView />
          </TabPanel>
          <TabPanel>
            <GanttView />
          </TabPanel>
        </TabPanels>
      </div>
    </div>
  );
};

export default Panel