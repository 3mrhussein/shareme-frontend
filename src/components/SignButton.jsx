import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout, AiOutlineLogin } from 'react-icons/ai';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
const SignButton = () => {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);
  const handleSignout = async (e) => {
    e.preventDefault();
    if (user) {
      await localStorage.clear();
      await sessionStorage.clear();
      setUser(null);
    }
    navigate('/login', { replace: true });
  };
  return (
    <button
      className="bg-white p-3 rounded-full flex flex-row gap-2 justify-center items-center cursor-pointer outline-none shadow-lg font-bold"
      onClick={handleSignout}
    >
      {!user ? (
        <>
          Sign In
          <AiOutlineLogin color="red" fontSize={21} />
        </>
      ) : (
        <>
          Sign Out
          <AiOutlineLogout color="red" fontSize={21} />
        </>
      )}
    </button>
  );
};

export default SignButton;
