import React, { createContext, useState } from 'react';
import Spinner from '../components/spinner';

export const LoadingContext = createContext();
export const LoadingContextProvider = ({ children }) => {
  const [pageLoading, setPageLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  return (
    <LoadingContext.Provider value={{ setPageLoading, setLoadingMsg }}>
      {pageLoading && (
        <div className="fixed h-screen w-screen flex-center text-white font-extrabold text-lg bg-black bg-opacity-95 z-1000">
          <Spinner isLoading={pageLoading} message={loadingMsg} />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};
