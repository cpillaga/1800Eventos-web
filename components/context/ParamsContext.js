"use client"
import { createContext, useContext, useState } from 'react';

const ParamsContext = createContext();

export const GlobalStateProvider = ({ children }) => {

  const [sharedValue, setSharedValue] = useState(""); 

  return (
    <ParamsContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </ParamsContext.Provider>
  );
};


export const useGlobalState = () => useContext(ParamsContext);
