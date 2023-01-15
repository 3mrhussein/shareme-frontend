import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postPin, uploadPinImage } from '../APIs/pinsAPI';
import { LoadingContext } from './loadingContext';
import { PinContext } from './pinContext';
import { UserContext } from '../context/userContext';

function initlizePinDoc(title, about, destination, category, imgId, userId) {
  return {
    _type: 'pin',
    title,
    about,
    destination,
    image: {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imgId,
      },
    },
    userId,
    postedBy: {
      _type: 'postedBy',
      _ref: userId,
    },
    category,
    save: [],
  };
}

export const CreatePinContext = createContext(null);

export const CreatePinContextProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const { dispatch } = useContext(PinContext);

  const navigate = useNavigate();

  const [missing, setMissing] = useState(null);
  const { setPageLoading } = useContext(LoadingContext);
  const [inputs, setInputs] = useState({
    title: null,
    about: null,
    destination: null,
    category: null,
    img: null,
  });
  const Publish = () => {
    setPageLoading((prevState) => ({
      ...prevState,
      loading: true,
      loadingMsg: 'Uploading...',
      bgOpacity: 0.7,
    }));
    uploadPinImage(inputs.img)
      .then((document) => {
        const doc = initlizePinDoc(
          inputs.title,
          inputs.about,
          inputs.destination,
          inputs.category,
          document._id,
          user._id
        );
        postPin(doc)
          .then((res) => {
            dispatch({
              type: 'CREATE_NEW_PIN',
              payload: { ...res, postedBy: { _id: user._id } },
            });

            setInputs({
              title: null,
              about: null,
              destination: null,
              category: null,
              img: null,
            });
            setPageLoading((prevState) => ({ ...prevState, loading: false }));
            navigate('/');
          })
          .catch((e) => {
            alert('Cannot publish new Pin');
            setPageLoading((prevState) => ({ ...prevState, loading: false }));
          });
      })
      .catch((err) => {
        alert(err);

        alert('Failed to upload image', err);
      });
  };

  return (
    <CreatePinContext.Provider value={{ inputs, setInputs, missing, setMissing, Publish }}>
      {children}
    </CreatePinContext.Provider>
  );
};
