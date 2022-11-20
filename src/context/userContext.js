import { createContext, useEffect, useState } from 'react';

import React from 'react';

export const UserContext = createContext(null);
export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [userIsLoaded, setUserIsLoaded] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      const currentUser = await localStorage.getItem('user');
      await setUser(JSON.parse(currentUser));
      await setUserIsLoaded(true);
    };
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, userIsLoaded }}>
      {children}
    </UserContext.Provider>
  );
};
