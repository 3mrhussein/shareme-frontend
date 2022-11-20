import React, { useContext } from 'react';
import DesktopSidebar from './desktopSidebar';
import MobileSidebar from './mobileSidebar';
import { HiMenu } from 'react-icons/hi';
import { SideBarContext } from '../context/sideBarContext';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { UserContext } from '../context/userContext';
import UserCard from './userCard';
import LogoutButton from './logoutButton';

const Sidebar = () => {
  const { pathname } = useLocation();

  const { user, userIsLoaded } = useContext(UserContext);
  const { displaySidebar, setDisplaySidebar } = useContext(SideBarContext);

  return (
    <>
      <DesktopSidebar />
      <div className=" flex md:hidden flex-row">
        {/* Show the burger icon only in small screens and make it hidden in medium and larger screens */}
        <div
          className={`bg-white translate-y-16 ease-in-out duration-500  fixed   z-40 -top-16  p-2 w-full flex flex-row  justify-between  items-center shadow-md `}
        >
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setDisplaySidebar(true)}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          {user &&
            userIsLoaded &&
            (pathname.split('/')[2] === user?._id ? (
              <LogoutButton />
            ) : (
              <UserCard
                imageWidth={10}
                imageHeight={10}
                showImg
                redirect
                user={user}
              />
            ))}
        </div>
        {displaySidebar && <MobileSidebar display={setDisplaySidebar} />}
      </div>
    </>
  );
};

export default Sidebar;
