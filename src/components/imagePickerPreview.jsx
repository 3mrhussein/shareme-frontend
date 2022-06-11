import React from 'react';
import { MdDelete } from 'react-icons/md';
import Spinner from './spinner';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useState } from 'react';
import { uploadPinImage } from '../Utils/APIs/pinsAPI';
const ImagePickerPreview = ({ setImageAsset, imageAsset }) => {
  const [loading, setLoading] = useState(false);
  const [wrongeImageType, setWrongeImageType] = useState(false);

  const uploadImage = (e) => {
    const { type } = e.target.files[0];
    if (
      type ===
      ('image/jpeg' ||
        'image/png' ||
        'image/svg' ||
        'image/gif' ||
        'image/tiff')
    ) {
      setWrongeImageType(false);
      setLoading(true);
      uploadPinImage(e.target.files[0])
        .then((document) => {
          setImageAsset(document);
          setLoading(false);
        })
        .catch((error) => {
          console.log('image upload Error', error);
        });
    } else {
      setWrongeImageType(true);
    }
  };
  return (
    <div className=" bg-secondaryColor p-3 flex flex-0.7 h-full w-full">
      <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-370">
        <Spinner isLoading={loading}></Spinner>
        {wrongeImageType && (
          <p className="text-red-500 text-md p-5">*Wronge Image Type</p>
        )}
        {!imageAsset ? (
          <label>
            <div className="flex flex-col items-center justify-center ">
              <div className="flex flex-col justify-center items-center">
                <p className="font-bold text-2xl">
                  <AiOutlineCloudUpload />
                </p>
                <p className="text-md">Click to upload</p>
              </div>
              <p className=" mt-28 text-xs text-gray-400 ">
                Use high-quality JPG, SVG, PNG, GIF less than 20 MB
              </p>
            </div>
            <input
              type="file"
              name="upload-img"
              onChange={uploadImage}
              className="w-0 h-0"
            ></input>
          </label>
        ) : (
          <div className="relative h-full">
            <img
              src={imageAsset?.url}
              alt="uploaded-pic"
              className="h-full w-full object-contain"
            />
            <button
              type="button"
              className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-2xl shadow-md  hover:text-2xl transition-all duration-500 ease-in-out"
              onClick={() => setImageAsset(null)}
            >
              <MdDelete />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePickerPreview;
