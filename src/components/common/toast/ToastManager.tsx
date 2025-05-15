import React, { createContext, useContext, useState, useCallback, useRef, ReactElement, JSXElementConstructor, ReactNode, useEffect } from "react";
import {Toast, ToastAction } from "@vibe/core";
import { setToastPush } from './Toast';

type ToastContent = | string | ReactElement<any, string | JSXElementConstructor<any>> | ReactElement<any, string | JSXElementConstructor<any>>[];
type ToastType = "dark"| "normal" | "positive" | "negative" | "warning";

interface ToastItem {id: number; content: ToastContent; type: ToastType; actions?: ToastAction[]; autoHideDuration: number; loading?: boolean; className?: string; }

interface ToastContextType {
  push: (
    content: ToastContent,
    type?: ToastType,
    actions?: ToastAction[]
  ) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);

  const push = useCallback((content: ToastContent, type: ToastType = "normal", actions: ToastAction[] = []) => {
      if (content === undefined || content === null) return;
      const id = ++idRef.current;
      const toast: ToastItem = {id, content, type, actions, autoHideDuration: 3000 };
      setToasts((prev) => [...prev, toast]);
      setTimeout(() => { setToasts((prev) => prev.filter((t) => t.id !== id)); }, toast.autoHideDuration);
    }, []
  );

  useEffect(() => {setToastPush(push);}, [push]);
  
  const remove = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      {toasts.map((toast) => (
        <Toast key={toast.id} open type={toast.type} autoHideDuration={toast.autoHideDuration} actions={toast.actions} loading={toast.loading} className={toast.className} onClose={() => remove(toast.id)}>
          {toast.content}
        </Toast>
      ))}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
