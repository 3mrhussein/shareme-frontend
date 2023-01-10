import React from 'react';
import { Grid } from 'react-loader-spinner';
const Spinner = ({ children, isLoading, message, height = '50', width = '100' }) => {
  if (isLoading)
    return (
      <div className="flex-center flex-col text-base gap-3 m-auto ">
        <Grid height={height} width={width} color="#EF4444" />
        {message && <p className=" text-center px-2">{message}</p>}
      </div>
    );

  return <>{children}</>;
};

export default Spinner;
