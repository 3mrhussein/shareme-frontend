import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';

import Logo from './logo';
import { SideBarContext } from '../context/sideBarContext';
import { categories } from '../APIs/data';
const SideBarContent = () => {
  const { setDisplaySidebar } = useContext(SideBarContext);
  const isNotActiveStyle =
    'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-100 ease-in-out capitalize';
  const isActiveStyle =
    'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-100 ease-in-out capitalize';

  return (
    <div
      className="flex flex-col text-sm md:text-base pb-5 justify-between bg-white h-screen shadow-2xl  overflow-y-scroll hide-scrollbar "
      style={{ minWidth: '250px' }}
    >
      <div className="flex flex-col">
        <div
          onClick={() => setDisplaySidebar(false)}
          className=" flex px-5  my-6 pt-1 w-190 items-center"
        >
          <Logo />
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
            onClick={() => setDisplaySidebar(false)}
          >
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className=" px-5 text-base">Discover Categories</h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              to={`/category/${category.name}`}
              className={({ isActive }) => (isActive ? isActiveStyle : isNotActiveStyle)}
              onClick={() => setDisplaySidebar(false)}
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
      {/* <div className="p-3">
        {!!user ? (
          <UserCard
            imageWidth={10}
            imageHeight={10}
            showImg
            showName
            redirect
            user={user}
          />
        ) : (
          <div className="w-full flex justify-end">
            <LoginButton />
          </div>
        )}
      </div> */}
    </div>
  );
};

export default SideBarContent;
