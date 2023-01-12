import React, { useContext } from 'react';
import { SideBarContext } from '../context/sideBarContext';

import { NavLink } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';

import { categories } from '../APIs/data';
const Sidebar = () => {
  const { displaySidebar } = useContext(SideBarContext);
  const isNotActiveStyle =
    'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-100 ease-in-out capitalize';
  const isActiveStyle =
    'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-100 ease-in-out capitalize';

  return (
    displaySidebar && (
      <div
        className="fixed  md:relative pt-10 md:pt-16 top-14 bottom-0 left-0 md:top-0 h-full rounded-r-md  shadow-md flex flex-col overflow-scroll animate-slide-in md:animate-none bg-white z-10"
        style={{ minWidth: '300px' }}
      >
        <div className="flex flex-col gap-2 md:gap-3">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            // onClick={() => setDisplaySidebar(false)}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className=" px-5 text-base">Discover Categories</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              // onClick={() => setDisplaySidebar(false)}
              key={category.name}
            >
              <img
                className="w-7 h-7 rounded-full shadow-sm "
                alt={category.name}
                src={category.image}
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
      // </div>
    )
  );
};

export default Sidebar;
