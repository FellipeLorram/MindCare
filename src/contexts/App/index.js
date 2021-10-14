import React, { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

export default function AppContext({ children }) {
  const [bodyBlock, setBodyBlock] = useState(globalState.bodyBlock);

  return (
    <GlobalContext.Provider value={{ bodyBlock, setBodyBlock }}>{children}</GlobalContext.Provider>
  );
}
