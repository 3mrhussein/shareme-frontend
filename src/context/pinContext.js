import { Context, createContext, useState } from 'react';

import React from 'react';

export const PinContext = createContext(null);
export const PinContextProvider = ({ children }) => {
  const [pin, setPin] = useState(null);
  return (
    <PinContext.Provider value={{ pin, setPin }}>
      {children}
    </PinContext.Provider>
  );
};
