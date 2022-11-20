import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { getSavedPins, getUserCreatedPins } from '../Utils/APIs/pinsAPI';
import { getUserById } from '../Utils/APIs/userAPI';
import LogoutButton from './logoutButton';
import MasonryLayout from './masonryLayout';
import Spinner from './spinner';

function UserProfile() {
  const { user } = useContext(UserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [pins, setPins] = useState(null);
  const [activeBtn, setActiveBtn] = useState('created');
  const { userId } = useParams();

  const ActiveButtonStyles = `px-3 text-center shadow-lg bg-red-500 rounded-full w-22 text-white font-semibold outline-none`;
  const inActiveButtonStyles = `px-3 text-center items-center bg-white rounded-full w-20 font-semibold outline-none`;

  useEffect(() => {
    getUserById(userId).then((data) => setUserProfile(data[0]));
  }, [userId]);

  useEffect(() => {
    if (activeBtn === 'created') {
      getUserCreatedPins(userId).then((data) => setPins(data));
    } else if (activeBtn === 'saved') {
      getSavedPins(userId).then((data) => setPins(data));
    }
  }, [activeBtn, userId]);
  const randomImage =
    'https://source.unsplash.com/1600x900/?nature,photography,technology';
  return (
    <div className=" h-screen w-full">
      <Spinner isLoading={!userProfile} message={'Loading Profile ...'}>
        <div className="relative pb-2 h-full justify-center items-center">
          <div className="flex flex-col pb-5 ">
            <div className="relative flex flex-col mb-7">
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
                <h1 className=" font-bold text-3xl text-center mt-3">
                  {userProfile?.userName}{' '}
                </h1>
              </div>
              {userId === user?._id && (
                <div className=" hidden md:block absolute top-0 right-0 m-3">
                  <LogoutButton />
                </div>
              )}
            </div>
            <div className="flex gap-2 justify-center items-center mb-7">
              <button
                type="button"
                onClick={() => setActiveBtn('created')}
                className={
                  activeBtn === 'created'
                    ? ActiveButtonStyles
                    : inActiveButtonStyles
                }
              >
                Created
              </button>
              <button
                type="button"
                onClick={() => setActiveBtn('saved')}
                className={
                  activeBtn === 'saved'
                    ? ActiveButtonStyles
                    : inActiveButtonStyles
                }
              >
                Saved
              </button>
            </div>
            {pins?.length ? (
              <MasonryLayout pins={pins} />
            ) : (
              <div className=" text-center font-bold">No Pins Found</div>
            )}
          </div>
        </div>
      </Spinner>
    </div>
  );
}

export default UserProfile;
