import React, { useContext } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import LogoutButton from '../components/logoutButton';
import { SideBarContext } from '../context/sideBarContext';
import { UserContext } from '../context/userContext';
import UserCard from './userCard';
const Navbar = () => {
  const { user, userIsLoaded } = useContext(UserContext);
  const { setDisplaySidebar } = useContext(SideBarContext);
  const { pathname } = useLocation();

  return (
    <div
      className={`bg-white relative z-50  p-2 w-full flex flex-row  justify-between  items-center shadow-md `}
    >
      <HiMenu
        fontSize={40}
        className="cursor-pointer"
        onClick={() => setDisplaySidebar((prevState) => !prevState)}
      />
      <Link to="/">
        <img src={logo} alt="logo" className="w-28" />
      </Link>
      {user &&
        userIsLoaded &&
        (pathname.split('/')[2] === user?._id ? (
          <LogoutButton />
        ) : (
          <UserCard imageWidth={10} imageHeight={10} showImg redirect user={user} />
        ))}
    </div>
  );
};

export default Navbar;
