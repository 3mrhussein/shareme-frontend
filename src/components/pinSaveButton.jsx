import React from 'react';

const PinSaveButton = ({ alreadySaved, savePin, _id, savingPost, save }) => {
  return alreadySaved ? (
    <button
      type="button"
      className="bg-red-500  opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-sm outline-none"
    >
      {save?.length} Saved
    </button>
  ) : (
    <button
      type="button"
      className="bg-red-500  opacity-70 hover:opacity-100 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-sm outline-none"
      onClick={(e) => {
        e.stopPropagation();
        savePin(_id);
      }}
    >
      {savingPost ? 'Saving' : 'Save'}
    </button>
  );
};

export default PinSaveButton;
