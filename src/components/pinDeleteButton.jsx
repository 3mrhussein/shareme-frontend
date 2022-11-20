import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { deletePinById } from '../Utils/APIs/pinsAPI';

const PinDeleteButton = ({ pinId }) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        deletePinById(pinId);
      }}
      className=" bg-white p-2 opacity-70 hover:opacity-100 font-bold text-dark text-base rounded-3xl hover:shadow-sm outline-none"
    >
      <AiTwotoneDelete />
    </button>
  );
};

export default PinDeleteButton;
