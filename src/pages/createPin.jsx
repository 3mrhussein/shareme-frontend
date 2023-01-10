import React, { useContext, useState } from 'react';
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import { postPin } from '../APIs/pinsAPI';
import PinForm from '../components/pinForm';
import ImagePickerPreview from '../components/imagePickerPreview';
import { PinContext } from '../context/pinContext';
const CreatePin = () => {
  const [fields, setFields] = useState(null);
  const [imageAsset, setImageAsset] = useState(null);

  const { user } = useContext(UserContext);
  const { dispatch } = useContext(PinContext);
  const navigate = useNavigate();

  const uploadPin = (e) => {
    const { title, about, destination, category } = e.target;
    if (title.value && about.value && destination.value && imageAsset?._id && category.value) {
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
        save: [],
      };

      postPin(doc).then((res) => {
        dispatch({ type: 'CREATE_NEW_PIN', payload: res });
        navigate('/');
      });
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
        <ImagePickerPreview imageAsset={imageAsset} setImageAsset={setImageAsset} />
        <PinForm uploadPin={uploadPin} />
      </div>
    </div>
  );
};

export default CreatePin;
