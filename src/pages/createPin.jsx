import React, { useContext } from 'react';
import ImagePickerPreview from '../components/imagePickerPreview';
import { CreatePinContext } from '../context/createPinContext';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { categories } from '../APIs/data';
import UserCard from '../components/userCard';

const CreatePin = () => {
  const { Publish, setMissing, inputs, setInputs, missing } = useContext(CreatePinContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      navigate('/login', { replace: true });
      return;
    }
    const { title, about, destination, img, category } = inputs;

    if (!title || !about || !destination || !category || !img) {
      setMissing(true);
      setTimeout(() => setMissing(false), 2000);
      return;
    }
    Publish();
  };

  return (
    <form className="flex-center flex-col lg:flex-row  bg-white lg:p-5 p-3 h-full w-full">
      <ImagePickerPreview />

      <div className="flex flex-1  flex-col gap-1 text-md lg:text-lg lg:pl-5 mt-5 w-full">
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Add your title here"
          className="outline-none text-base   border-b-2 border-gray-200 py-2"
        />

        <div className="py-1">
          <UserCard user={user} showImg showName imageHeight="8" imageWidth="8" />
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

        <div className="flex justify-between flex-row-reverse my-6">
          <button
            onClick={handleSubmit}
            className="bg-red-500 cursor-pointer text-white font-bold p-2 rounded-full w-28 outline-none"
          >
            Publish
          </button>

          {missing && (
            <p className=" text-red-600 text-md text-base transition-all duration-150 ease-in">
              Please fill in all the fields.
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default CreatePin;
