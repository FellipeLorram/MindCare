import React, { createContext, useState } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

export default function AppContext({ children }) {
  const [bodyBlock, setBodyBlock] = useState(globalState.bodyBlock);
  const [Theme, setTheme] = useState(globalState.theme);

  return (
    <GlobalContext.Provider
      value={{
        setTheme,
        Theme,
        bodyBlock,
        setBodyBlock,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
