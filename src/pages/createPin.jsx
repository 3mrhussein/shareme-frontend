import React, { useContext } from 'react';

import PinForm from '../components/pinForm';
import ImagePickerPreview from '../components/imagePickerPreview';
import { CreatePinContext } from '../context/createPinContext';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
const CreatePin = () => {
  const { Publish, setMissing, inputs } = useContext(CreatePinContext);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    alert('form submitted');
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
    <div className="flex flex-col justify-center items-center mt-2">
      <form
        onSubmit={handleSubmit}
        className="flex-center flex-col lg:flex-row  bg-white lg:p-5 p-3 h-full w-full"
      >
        <ImagePickerPreview />
        <PinForm />
      </form>
    </div>
  );
};

export default CreatePin;
