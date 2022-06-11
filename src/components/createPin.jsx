import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { postPin } from '../Utils/APIs/pinsAPI';
import PinForm from './pinForm';
import ImagePickerPreview from './imagePickerPreview';
const CreatePin = () => {
  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [destination, setDestination] = useState('');
  const [fields, setFields] = useState(null);
  const [category, setCategory] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const savePin = () => {
    if (title && about && destination && imageAsset?._id && category) {
      const doc = {
        _type: 'pin',
        title,
        about,
        destination,
        image: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageAsset?._id,
          },
        },
        userId: user._id,
        postedBy: {
          _type: 'postedBy',
          _ref: user._id,
        },
        category,
      };

      postPin(doc).then(() => navigate('/'));
    } else {
      setFields(true);
      setTimeout(() => setFields(false), 2000);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-2">
      {fields && (
        <p className=" text-red-500 mb-5 text-md text-base transition-all duration-150 ease-in">
          Please fill in all the fields.
        </p>
      )}
      <div className="flex flex-col lg:flex-row justify-center items-center bg-white lg:p-5 p-3 h-full w-full">
        <ImagePickerPreview
          imageAsset={imageAsset}
          setImageAsset={setImageAsset}
        />
        <PinForm
          title={title}
          setTitle={setTitle}
          about={about}
          setAbout={setAbout}
          destination={destination}
          setDestination={setDestination}
          category={category}
          setCategory={setCategory}
          savePin={savePin}
        />
      </div>
    </div>
  );
};

export default CreatePin;
