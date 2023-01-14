import React, { useContext } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { SideBarContext } from '../context/sideBarContext';
import { UserContext } from '../context/userContext';
import UserCard from './userCard';
import SignButton from './SignButton';
const Navbar = () => {
  const { user } = useContext(UserContext);
  const { setDisplaySidebar } = useContext(SideBarContext);
  const { pathname } = useLocation();

  return (
    <nav
      className={`bg-white fixed md:relative z-40 top-0 right-0 p-2 w-full flex flex-row justify-between items-center shadow-md `}
    >
      <HiMenu
        fontSize={40}
        className="cursor-pointer"
        onClick={() => setDisplaySidebar((prevState) => !prevState)}
      />
      <Link to="/">
        <img src={logo} alt="logo" className="w-28" />
      </Link>

      {pathname.split('/')[2] === user?._id ? (
        <SignButton />
      ) : (
        <UserCard imageWidth={10} imageHeight={10} showImg redirect user={user} />
      )}
    </nav>
  );
};

export default Navbar;
