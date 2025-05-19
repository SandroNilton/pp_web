import React, { createContext, ReactNode, useState } from "react";

interface TabsContextType {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProviderProps {
  children: ReactNode;
  onTabChange?: (index: number) => void;
}

export const TabsProvider = ({ children, onTabChange }: TabsProviderProps) => {
  const [activeIndex, setActiveIndexState] = useState(0);

  const setActiveIndex = (index: number) => {
    setActiveIndexState(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </TabsContext.Provider>
  );
};
