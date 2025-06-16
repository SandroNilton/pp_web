import React from "react"
import { TabProvider, useTabs } from "./TabsContext"

interface TabsProps {
  children: React.ReactNode;
  defaultIndex: number;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultIndex }) => {
  return <TabProvider defaultIndex={defaultIndex}>
    <div className="">
      {children}
    </div>
  </TabProvider>
}

export const TabList: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="tab-list flex overflow-x-auto overflow-y-hidden w-full flex-row list-none p-0 outline-none h-8">
    {children}
  </div>
}

export const Tab: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => {
  const { activeTab, setActiveTab } = useTabs(); /*[var(--ui-background-color)]*/

  return <div className={`tab-item ${activeTab === index ? 'active border-b-[#0073ea]' : 'border-b-transparent'} px-[1px]  border-solid h-full border-t-[1px] border-t-transparent border-b-2 text-center hover:bg-[var(--primary-background-hover-color)] hover:cursor-pointer rounded-t-[4px]`} onClick={() => setActiveTab(index)}>
    <div className="px-4 py-0.5 mb-[1px] labelgroup text-base text-[var(--primary-text-color)] justify-center items-center" style={{ height: 'calc(100% - 1px)' }}>
      {children}
    </div>
  </div>
}

export const TabPanel: React.FC<{ index: number; children: React.ReactNode }> = ({ index, children }) => {
  const { activeTab } = useTabs();

  return activeTab === index ? <div className="tab-panel h-full w-full">{children}</div> : null
  
}
