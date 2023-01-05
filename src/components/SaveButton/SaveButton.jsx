import React from 'react';
import { useState } from 'react';
import { savePinByCurrentUser } from '../../Utils/APIs/pinsAPI';

const SaveButton = ({ pin, user, classes }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPinSaved, setIsPinSaved] = useState(
    pin?.save?.filter((item) => item.postedBy?._id === user?._id)?.length
  );
  const savePin = async () => {
    if (!user) {
      window.alert('You must sign in to be able to save pins');
      return;
    }
    if (!isPinSaved) {
      try {
        setLoading(true);
        await savePinByCurrentUser(pin.id, user?._id);
        setIsPinSaved(true);
        setLoading(false);
      } catch (e) {}
      setLoading(false);
    }
  };
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
        savePin();
      }}
      className={` ${classes} p-1 pin-save-btn top-2 right-2 w-24 h-8 bg-red-500 text-white text-base rounded-3xl`}
    >
      {loading ? 'Saving...' : isPinSaved ? (isHovered ? 'Unsave' : 'Saved') : 'Save'}
    </button>
  );
};

export default SaveButton;
