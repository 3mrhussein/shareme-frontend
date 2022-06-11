import React from 'react';
import { MdDownloadForOffline } from 'react-icons/md';
const PinDownloadIcon = ({ url, interaction }) => {
  return (
    <a
      className={`bg-white w-9 h-9 rounded-full flex items-center justify-center text-2xl ${
        interaction ? 'opacity-75 hover:opacity-100 hover:shadow-md' : ''
      } outline-none`}
      href={`${url}?dl=`}
      download
      onClick={(e) => e.stopPropagation()}
    >
      <MdDownloadForOffline />
    </a>
  );
};

export default PinDownloadIcon;
