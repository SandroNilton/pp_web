import React, { ReactNode, useContext, Children, isValidElement, cloneElement } from "react";
import { TabsContext } from "./TabsContext";

interface TabProps {
  children: ReactNode;
  index?: number;
  isActive?: boolean;
  enabled?: boolean;
  onActivate?: () => void;
}

export const TabList = ({ children }: { children: ReactNode }) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("TabList must be inside TabsProvider");
  const { activeIndex, setActiveIndex } = context;

  return (
    <div style={{ display: "flex", gap: 8, borderBottom: "1px solid #ccc" }}>
      {Children.map(children, (child, index) => {
        if (!isValidElement<TabProps>(child)) return null;
        return cloneElement<TabProps>(child, {
          index,
          isActive: activeIndex === index,
          onActivate: () => setActiveIndex(index),
        });
      })}
    </div>
  );
};

export const Tab = ({
  children,
  enabled = true,
  isActive = false,
  onActivate,
}: TabProps) => {
  return (
    <button
      onClick={() => enabled && onActivate?.()}
      disabled={!enabled}
      style={{
        fontWeight: isActive ? "bold" : "normal",
        padding: "8px 16px",
        cursor: enabled ? "pointer" : "not-allowed",
        borderBottom: isActive ? "2px solid blue" : "2px solid transparent",
        background: "none",
        border: "none",
        color: enabled ? "black" : "gray",
        opacity: enabled ? 1 : 0.5,
      }}
    >
      {children}
    </button>
  );
};
