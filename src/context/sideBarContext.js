import { createContext, useState } from 'react';

export const SideBarContext = createContext(false);

export const SideBarContextProvider = ({ children }) => {
  const [displaySidebar, setDisplaySidebar] = useState(false);
  return (
    <SideBarContext.Provider value={{ displaySidebar, setDisplaySidebar }}>
      {children}
    </SideBarContext.Provider>
  );
};
