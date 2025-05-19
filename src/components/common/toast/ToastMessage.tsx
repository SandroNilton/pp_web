import React, { useEffect, useState } from "react";
import { Toast } from "@vibe/core";

// ========== GLOBAL toast.push IMPLEMENTATION ==========
type ToastType = "dark" | "normal" | "positive" | "negative" | "warning";

type ToastPayload = {
  message: string;
  type?: ToastType;
  autoHideDuration?: number;
  loading?: boolean;
};

let pushInternal: ((options: ToastPayload) => void) | null = null;

export const toast = {
  push: (p0: string, p1: number, options: ToastPayload) => {
    if (pushInternal) {
      pushInternal(options);
    } else {
      console.warn("Toast system is not initialized yet.");
    }
  },
};

export const ToastMesssage = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<ToastType>("normal");
  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState(2000);

  useEffect(() => {
    pushInternal = ({ message, type = "normal", autoHideDuration = 2000, loading = false }) => {
      setMessage(message);
      setType(type);
      setLoading(loading);
      setDuration(autoHideDuration);
      setOpen(true);
    };
  }, []);

  return (
    <Toast className="z-10" open={open} type={type} loading={loading} autoHideDuration={duration} onClose={() => setOpen(false)} >
      {message}
    </Toast>
  );
};