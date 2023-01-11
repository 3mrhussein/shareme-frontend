import React, { useContext } from 'react';

import PinForm from '../components/pinForm';
import ImagePickerPreview from '../components/imagePickerPreview';
import { CreatePinContext } from '../context/createPinContext';
const CreatePin = () => {
  const { Publish, setMissing, inputs } = useContext(CreatePinContext);

  const handleSubmit = (e) => {
    e.preventDefault();
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
