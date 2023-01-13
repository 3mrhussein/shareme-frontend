import React from 'react';
import useLoading from '../hooks/useLoading';

const PageNotFound = () => {
  useLoading(false);
  return <div className="w-full h-full flex-center">Page Not Found</div>;
};

export default PageNotFound;
