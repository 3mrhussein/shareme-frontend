import React from 'react';
import { useState } from 'react';
import useSave from '../../hooks/useSave';

const SaveButton = ({ pin, user, classes }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isSaved, isLoading, savePin, unSavePin } = useSave(pin, user?._id);

  return (
    <button
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        if (isSaved) {
          unSavePin();
        } else {
          savePin();
        }
      }}
      className={` ${classes} p-1 pin-save-btn top-2 right-2 w-24 h-8 bg-red-500 text-white text-base rounded-3xl`}
    >
      {isLoading ? 'Saving...' : isSaved ? (isHovered ? 'Unsave' : 'Saved') : 'Save'}
    </button>
  );
};

export default SaveButton;
