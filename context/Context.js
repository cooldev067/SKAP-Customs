"use client";

import React, { createContext, useContext, useState } from "react";

// Create a context
const DialogContext = createContext();

// Create a provider component
export function DialogProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  );
}

// Custom hook to use the DialogContext
export function useDialog() {
  return useContext(DialogContext);
}
