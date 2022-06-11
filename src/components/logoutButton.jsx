import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineLogout } from 'react-icons/ai';

const LogoutButton = () => {
  const navigate = useNavigate();

  const googleResponse = (response) => {
    localStorage.clear();
    navigate('/login', { replace: true });
  };
  return (
    <div>
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
        render={(renderProps) => (
          <button
            type="button"
            className="bg-white p-3 rounded-full flex flex-row gap-2 justify-center items-center cursor-pointer outline-none shadow-sm font-bold"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign Out
            <AiOutlineLogout color="red" fontSize={21} />
          </button>
        )}
        onLogoutSuccess={googleResponse}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
};

export default LogoutButton;
