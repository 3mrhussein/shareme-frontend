import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="p-2 w-20 rounded-xl text-white bg-red-500"
      type="button"
      onClick={() => navigate('/login', { replace: true })}
    >
      Login
    </button>
  );
};

export default LoginButton;
