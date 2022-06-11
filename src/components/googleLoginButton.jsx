import React from 'react';
import GoogleLogin from 'react-google-login';
import { FcGoogle } from 'react-icons/fc';
import { createNewUserDoc } from '../Utils/APIs/userAPI';
import { useNavigate } from 'react-router-dom';

function GoogleLoginButton() {
  const navigate = useNavigate();

  const googleResponse = (response) => {
    const { name, googleId, imageUrl } = response.profileObj;
    const userDoc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };
    localStorage.setItem('user', JSON.stringify(userDoc));
    createNewUserDoc(userDoc, () => {
      navigate('/', { replace: true });
    });
  };
  const googleLoginFailed = () => {
    console.log('Failed TO Login');
  };
  return (
    <div>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
        render={(renderProps) => (
          <button
            type="button"
            className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <FcGoogle className="mr-4" /> Sign in with Google
          </button>
        )}
        onSuccess={googleResponse}
        onFailure={googleLoginFailed}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

export default GoogleLoginButton;
