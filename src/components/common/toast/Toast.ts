// Importa los mismos tipos
import { ToastAction } from "@vibe/core";

// 🔄 Copia o importa ToastType y ToastContent del ToastManager
export type ToastType = "dark"| "normal" | "positive" | "negative" | "warning";

type ToastContent =
  | string
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>
  | React.ReactElement<any, string | React.JSXElementConstructor<any>>[];

type ToastPushFn = (
  content: ToastContent,
  type?: ToastType,
  actions?: ToastAction[]
) => void;

let pushToast: ToastPushFn = () => {
  console.warn("Toast system not initialized yet.");
};

export const setToastPush = (fn: ToastPushFn) => {
  pushToast = fn;
};

export const toast = {
  push: (content: ToastContent, type?: ToastType, actions?: ToastAction[]) => {
    pushToast(content, type, actions);
  },
};
