import React from 'react';
import { Circles } from 'react-loader-spinner';
const Spinner = ({
  children,
  isLoading,
  message,
  height = '50',
  width = '100',
}) => {
  if (isLoading)
    return (
      <div className="flex flex-col text-base gap-3 justify-center items-center h-full w-full ">
        <Circles height={height} width={width} color="#B14000" />
        {message && <p className=" text-center px-2">{message}</p>}
      </div>
    );

  return <>{children}</>;
};

export default Spinner;
