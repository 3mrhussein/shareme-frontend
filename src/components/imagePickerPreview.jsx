import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { useState } from 'react';
import { resizeImage } from '../Utils/utils';
import { CreatePinContext } from '../context/createPinContext';
const ImagePickerPreview = () => {
  const { setInputs, inputs } = useContext(CreatePinContext);
  const [imageAsset, setImageAsset] = useState(null);
  const [invalidType, setInvalidType] = useState(false);

  const handleImgChange = (e) => {
    const pattern = new RegExp('image/*');
    if (pattern.test(e.target.files[0]?.type)) {
      setInvalidType(false);
      resizeImage(e.target.files[0])
        .then((blob) => {
          setImageAsset(URL.createObjectURL(blob));
          setInputs({ ...inputs, img: blob });
        })
        .catch((e) => {
          setInputs({ ...inputs, img: null });
          setImageAsset(null);
        });
    } else {
      setInvalidType(true);
    }
  };
  return (
    <div className=" bg-secondaryColor p-3 flex flex-0.7 h-full w-full">
      <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-370">
        {invalidType && <p className="text-red-500 text-md p-5">Invalid image type</p>}
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
            <input type="file" name="imgFile" onChange={handleImgChange} className="w-0 h-0" />
          </label>
        ) : (
          <div className="relative h-full">
            <img src={imageAsset} alt="uploaded-pic" className="h-full w-full object-contain" />
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
