import { useContext } from 'react';
import { categories } from '../APIs/data';
import { CreatePinContext } from '../context/createPinContext';
import UserCard from './userCard';

const PinForm = ({ user }) => {
  const { missing, setInputs } = useContext(CreatePinContext);
  const handleChange = (e) => {
    setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  return (
    <div className="flex flex-1  flex-col gap-1 text-md lg:text-lg lg:pl-5 mt-5 w-full">
      <input
        onChange={handleChange}
        type="text"
        name="title"
        placeholder="Add your title here"
        className="outline-none text-base   border-b-2 border-gray-200 py-2"
      />
      <div className="py-1">
        <UserCard user={user} showImg showName imageHeight="10" imageWidth="10" />
      </div>
      <input
        onChange={handleChange}
        type="text"
        name="about"
        placeholder="What is your pin about"
        className="outline-none text-base border-b-2 border-gray-200 py-2 "
      />
      <input
        onChange={handleChange}
        type="text"
        name="destination"
        placeholder="Add a destination link"
        className="outline-none text-base  border-b-2 border-gray-200 py-2"
      />
      {/* <div className="flex flex-col"> */}
      <p className="mb-2 text-gray-700  font-semibold  py-2 ">Choose Pin Category</p>
      <select
        onChange={handleChange}
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

      {missing && (
        <p className=" m-auto text-red-600 mb-5 text-md text-base transition-all duration-150 ease-in">
          Please fill in all the fields.
        </p>
      )}
      <input
        type="submit"
        className="bg-red-500 cursor-pointer m-auto text-white font-bold p-2 rounded-full w-28 outline-none"
        value={'Save'}
      />
    </div>
  );
};

export default PinForm;
