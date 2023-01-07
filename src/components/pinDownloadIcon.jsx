import React from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
const PinDownloadIcon = ({ url, className }) => {
  return (
    <a className={className} href={`${url}?dl=`} download onClick={(e) => e.stopPropagation()}>
      <MdDownloadForOffline />
    </a>
  );
};

export default PinDownloadIcon;
