import React from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import SideBarContent from './sideBarContent';

function MobileSidebar({ display }) {
  return (
    <div className="fixed w-4/5 bg-white h-screen max-w-xs min-w-210 overflow-y-auto shadow-2xl rounded-2xl z-10 animate-slide-in">
      <div className="absolute w-full flex justify-end items-center p-2">
        <AiFillCloseCircle
          fontSize={30}
          className="cursor-pointer"
          onClick={() => display(false)}
        />
      </div>
      <SideBarContent />
    </div>
  );
}

export default MobileSidebar;
