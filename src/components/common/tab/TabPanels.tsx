import React, { ReactNode, useContext, Children, isValidElement, cloneElement } from "react";
import { TabsContext } from "./TabsContext";

interface TabPanelProps {
  children: ReactNode;
  index?: number;
  activeIndex?: number;
}

export const TabPanels = ({ children }: { children: ReactNode }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabPanels must be inside TabsProvider");
  const { activeIndex } = context;

  return (
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement<TabPanelProps>(child)) return null;
        return cloneElement(child, {
          index,
          activeIndex,
        });
      })}
    </>
  );
};

export const TabPanel = ({ children, index, activeIndex }: TabPanelProps) => {
  return activeIndex === index ? <div>{children}</div> : null;
};
