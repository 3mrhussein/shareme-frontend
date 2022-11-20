import React, { useEffect, useContext } from 'react';
import { createNewUserDoc } from '../Utils/APIs/userAPI';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { UserContext } from '../context/userContext';
const GoogleLoginButton = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const handleCallbackResponse = (response) => {
    const { sub, name, picture } = jwt_decode(response.credential);
    const userDoc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture,
    };

    createNewUserDoc(userDoc, () => {
      localStorage.setItem('user', JSON.stringify(userDoc));
      setUser(userDoc);
      navigate('/', { replace: true });
    });
  };
  useEffect(() => {
    /* global google */
    // eslint-disable-next-line no-unused-expressions
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_AUTH_CLIENT_ID,
      callback: handleCallbackResponse,
      auto_select: false,
    });

    // eslint-disable-next-line no-undef
    google.accounts.id.renderButton(document.getElementById('login-div'), {
      theme: 'outline',
      size: 'large',
    });
  });

  return <div id="login-div" />;
};

export default GoogleLoginButton;
