import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSavedPins, getUserCreatedPins } from '../APIs/pinsAPI';
import { getUserById } from '../APIs/userAPI';
import MasonryLayout from '../container/masonryLayout';
import useLoading from '../hooks/useLoading';

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);
  const [pins, setPins] = useState(null);
  const [activeBtn, setActiveBtn] = useState('created');
  const { userId } = useParams();
  const navigate = useNavigate();

  useLoading(!userProfile, 'Loading Profile ...', 0.95);
  const ActiveButtonStyles = `px-3 text-center shadow-lg bg-red-500 rounded-full w-22 text-white font-semibold outline-none`;
  const inActiveButtonStyles = `px-3 text-center items-center bg-white rounded-full w-20 font-semibold outline-none`;

  useEffect(() => {
    getUserById(userId)
      .then((data) => {
        if (data.length === 0) {
          navigate('/404', { replace: true });
          return;
        }
        setUserProfile(data[0]);
      })
      .catch((err) => navigate('/404', { replace: true }));
  }, [userId, navigate]);

  useEffect(() => {
    if (activeBtn === 'created') {
      getUserCreatedPins(userId).then((data) => setPins(data));
    } else if (activeBtn === 'saved') {
      getSavedPins(userId).then((data) => setPins(data));
    }
  }, [activeBtn, userId]);
  const randomImage = 'https://source.unsplash.com/1600x900/?photography,technology';
  return (
    <div className="pb-5 flex-col h-full">
      <div className="flex flex-col mb-7">
        <div className="flex flex-col justify-center items-center">
          <img
            src={randomImage}
            className="w-full h-370 2xl:510 shadow-lg object-cover"
            alt="banner-pic"
          />
          <img
            src={userProfile?.image}
            className=" w-24 object-cover  -mt-12 rounded-full p-1 bg-red-500"
            alt="user-pic"
          />
          <h1 className=" font-bold text-3xl text-center mt-3">{userProfile?.userName} </h1>
        </div>
        {/* {userId === user?._id && (
          <div className=" hidden md:block absolute top-0 right-0 m-3">
            <LogoutButton />
          </div>
        )} */}
      </div>
      <div className="flex gap-2 justify-center items-center mb-7">
        <button
          type="button"
          onClick={() => setActiveBtn('created')}
          className={activeBtn === 'created' ? ActiveButtonStyles : inActiveButtonStyles}
        >
          Created
        </button>
        <button
          type="button"
          onClick={() => setActiveBtn('saved')}
          className={activeBtn === 'saved' ? ActiveButtonStyles : inActiveButtonStyles}
        >
          Saved
        </button>
      </div>
      {pins?.length ? (
        <MasonryLayout pins={pins} />
      ) : (
        <div className=" min-h-400 flex-center text-center font-bold">No Pins Found</div>
      )}
    </div>
  );
}

export default UserProfile;
