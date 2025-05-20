import React, { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

interface TabsContextType {
  activeTab: number;
  setActiveTab: (id: number) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const TabProvider = ({ children, defaultIndex = 0 }: { children: ReactNode; defaultIndex?: number }) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  )
};

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTab must be used within a TabProvider");
  }
  return context;
}