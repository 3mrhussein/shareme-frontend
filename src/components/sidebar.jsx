import React, { useContext } from 'react';
import DesktopSidebar from './desktopSidebar';
import MobileSidebar from './mobileSidebar';
import { HiMenu } from 'react-icons/hi';
import { SideBarContext } from '../context/sideBarContext';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { UserContext } from '../context/userContext';
import UserCard from './userCard';
import LoginButton from './loginButton';
import { useState, useEffect } from 'react';
import LogoutButton from './logoutButton';

const Sidebar = () => {
  const { pathname } = useLocation();

  const { user } = useContext(UserContext);
  const { displaySidebar, setDisplaySidebar } = useContext(SideBarContext);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(true);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > lastScrollPosition && scrollPosition > 100) {
      setShowMenu(false);
    } else setShowMenu(true);
    setLastScrollPosition(scrollPosition);
  }, [scrollPosition]);
  return (
    <>
      <DesktopSidebar />
      <div className=" flex md:hidden flex-row">
        {/* Show the burger icon only in small screens and make it hidden in medium and larger screens */}
        <div
          className={`${
            showMenu ? 'bg-white translate-y-16 ease-in-out duration-500 ' : ''
          }  fixed   z-40 -top-16  rounded-sm p-2 w-full flex flex-row  justify-between  items-center shadow-md `}
        >
          <HiMenu
            fontSize={40}
            className="cursor-pointer"
            onClick={() => setDisplaySidebar(true)}
          />
          <Link to="/">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
          {!!user ? (
            pathname.split('/')[2] === user?._id ? (
              <LogoutButton />
            ) : (
              <UserCard
                imageWidth={10}
                imageHeight={10}
                showImg
                redirect
                user={user}
              />
            )
          ) : (
            <div className="flex items-end">
              <LoginButton />
            </div>
          )}
        </div>
        {displaySidebar && <MobileSidebar display={setDisplaySidebar} />}
      </div>
    </>
  );
};

export default Sidebar;
