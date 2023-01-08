import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdSearch } from 'react-icons/io';
import { UserContext } from '../context/userContext';
import { SearchContext } from '../context/searchContext';
const Search = () => {
  const { user } = useContext(UserContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  if (!user) return null;
  return (
    <div className="flex-center px-2 md:px5 gap-2  md:gap-5 mt-5 pb-7">
      <div className="flex-center w-full px-2 rounded-md bg-white border-none outline-none shadow-sm focus-within:shadow-md">
        <IoMdSearch fontSize={21} className=" ml-1" />
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          value={searchTerm}
          className="p-3 w-full  bg-white  outline-none"
        />
      </div>

      <Link
        to={'create-pin'}
        className="bg-black text-white rounded-full w-16 h-16  flex justify-center items-center"
      >
        <IoMdAdd />
      </Link>
    </div>
  );
};

export default Search;
