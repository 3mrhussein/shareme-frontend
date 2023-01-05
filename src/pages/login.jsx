import { useNavigate } from 'react-router-dom';
import shareVideo from '../assets/share.mp4';
import logo from '../assets/logowhite.png';
import React from 'react';
import GoogleLoginButton from '../components/googleLoginButton';
import { useEffect } from 'react';

const Login = ({ wait, user }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate(`/user-profile/${user._id}`, { replace: true });
  }, [user, navigate]);
  return (
    !user &&
    !wait && (
      <div className="flex justify-start items-center flex-col ">
        <div className="relative w-full h-screen ">
          <video
            src={shareVideo}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            onClick={(e) => e.preventDefault()}
            className="w-full h-full object-cover"
            playsInline
          />
          <div className="absolute flex flex-col gap-4 justify-center items-center  top-0 right-0 left-0 bottom-0 bg-blackOverlay">
            <img
              src={logo}
              width="130px"
              alt="logo"
              className=" cursor-pointer"
              onClick={() => navigate('/', { replace: true })}
            />

            <GoogleLoginButton />
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
