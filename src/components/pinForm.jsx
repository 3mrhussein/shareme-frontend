import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import { categories } from '../APIs/data';
import UserCard from './userCard';

const PinForm = ({ uploadPin }) => {
  const { user } = useContext(UserContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        uploadPin(e);
      }}
      className="flex flex-1  flex-col gap-1 text-md lg:text-lg lg:pl-5 mt-5 w-full"
    >
      <input
        type="text"
        name="title"
        placeholder="Add your title here"
        className="outline-none text-base   border-b-2 border-gray-200 py-2"
      />
      <div className="py-1">
        <UserCard user={user} showImg showName imageHeight="10" imageWidth="10" />
      </div>
      <input
        type="text"
        name="about"
        placeholder="What is your pin about"
        className="outline-none text-base border-b-2 border-gray-200 py-2 "
      />
      <input
        type="text"
        name="destination"
        placeholder="Add a destination link"
        className="outline-none text-base  border-b-2 border-gray-200 py-2"
      />
      {/* <div className="flex flex-col"> */}
      <div>
        <p className="mb-2 text-gray-700  font-semibold  py-2 ">Choose Pin Category</p>
        <select
          name="category"
          className="outline-none w-4/5 text-gray-700 text-base   border-b-2 border-gray-200  rounded-md cursor-pointer"
        >
          <option value="other" className="bg-white  text-gray-700">
            Select Category
          </option>
          {categories.map((category) => (
            <option
              key={category?.name}
              value={category?.name}
              className="text-base border-0 outline-none capitalize  bg-white text-gray-700"
            >
              {category?.name}
            </option>
          ))}
        </select>
        {/* </div> */}
      </div>
      <div className="flex justify-center items-center p-5">
        <button
          type="submit"
          className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default PinForm;
