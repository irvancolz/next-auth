"use client";
import React, { PropsWithChildren, createContext, useState } from "react";

export type callbackContext = {
  callback: string;
  updateCallback: (a: string) => void;
};

export const CallbackUrlContext = createContext<callbackContext>(
  {} as callbackContext
);

export default function CallbackUrl({
  children,
}: PropsWithChildren): JSX.Element {
  const [callback, setCallback] = useState("/");
  function updateCallback(a: string) {
    setCallback(() => a);
  }
  return (
    <CallbackUrlContext.Provider value={{ callback, updateCallback }}>
      {children}
    </CallbackUrlContext.Provider>
  );
}
