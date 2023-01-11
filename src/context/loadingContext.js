import React, { createContext, useState } from 'react';
import Spinner from '../components/spinner';

export const LoadingContext = createContext();
export const LoadingContextProvider = ({ children }) => {
  const [pageLoading, setPageLoading] = useState({
    loading: false,
    loadingMsg: '',
    bgOpacity: 1,
  });
  return (
    <LoadingContext.Provider value={{ setPageLoading }}>
      {pageLoading.loading && (
        <div
          style={{ backgroundColor: `rgba(0,0,0,${pageLoading.bgOpacity})` }}
          className={`fixed h-screen w-screen -translate-x-2/4 -translate-y-2/4 left-1/2 top-1/2 flex-center text-white font-extrabold text-lg z-1000`}
        >
          <Spinner isLoading={pageLoading.loading} message={pageLoading.loadingMsg} />
        </div>
      )}
      {children}
    </LoadingContext.Provider>
  );
};
