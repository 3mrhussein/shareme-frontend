import React from 'react';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const PinDestinationButton = ({ destination }) => {
  return (
    destination && (
      <a
        onClick={(e) => e.stopPropagation()}
        href={destination}
        target="_blank"
        rel="noreferrer"
        className="bg-white flex items-center text-xs gap-2 text-black font-bold p-2 px-4 rounded-full opacity-70 hover:opacity-100 hover:shadow-md "
        title={destination}
      >
        <BsFillArrowUpRightCircleFill />
        {destination.length > 20
          ? `${destination.slice(8, 18)}... `
          : destination}
      </a>
    )
  );
};

export default PinDestinationButton;
