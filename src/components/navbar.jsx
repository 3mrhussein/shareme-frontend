import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { UserContext } from '../context/userContext';
import { SearchContext } from '../context/searchContext';
import UserCard from './userCard';
const NavBar = () => {
  const { user } = useContext(UserContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const navigate = useNavigate();
  if (!user) return null;
  return (
    <div className="flex gap-2 justify-between md:gap-5 w-full h-20 mt-5 pb-7">
      <div className="flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm">
        <IoMdSearch fontSize={21} className=" ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          onFocus={() => navigate('/search')}
          className="pl-2 pb-1 w-full  bg-white outline-none"
        />
      </div>
      <div className="flex gap-3">
        <div className=" hidden md:block">
          <UserCard showImg imageWidth="14" redirect user={user} />
        </div>
        <Link
          to={'create-pin'}
          className="bg-black text-white rounded-full w-12 h-12 md:w-14 flex justify-center items-center"
        >
          <IoMdAdd />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
