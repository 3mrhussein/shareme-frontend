import React from 'react';
import SideBarContent from './sideBarContent';

function DesktopSidebar() {
  return (
    <div style={{ minWidth: '250px' }}>
      <div className="hidden fixed md:flex w-full h-screen bottom-2 shadow-md rounded-xl">
        {/* set display as hidden in all screen //but set it as flex in medium
screens and larger */}
        <SideBarContent />
      </div>
    </div>
  );
}

export default DesktopSidebar;
