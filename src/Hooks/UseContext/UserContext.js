import React, { createContext } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const data = {
    name: 'Richa',
    age: 30,
  };
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};
