import React, { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { DEFAULT_VARIANT } from "../components/progress";

const STORAGE_KEY = "adm-progress-variant";
const isDev = process.env.NODE_ENV === "development";

interface ProgressVariantContextValue {
  variant: string;
  setVariant: (variant: string) => void;
}

const ProgressVariantContext = createContext<ProgressVariantContextValue>({
  variant: DEFAULT_VARIANT,
  setVariant: () => {},
});

export function ProgressVariantProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState(DEFAULT_VARIANT);

  useEffect(() => {
    if (!isDev) return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setVariant(stored);
    } catch (e) {
      // matches useMaturityState's original try{...}catch(e){}
    }
  }, []);

  useEffect(() => {
    if (!isDev) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, variant);
    } catch (e) {
      // ignore write failures (e.g. private browsing)
    }
  }, [variant]);

  return (
    <ProgressVariantContext.Provider value={{ variant, setVariant }}>
      {children}
    </ProgressVariantContext.Provider>
  );
}

export const useProgressVariant = () => useContext(ProgressVariantContext);
