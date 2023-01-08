import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineLogout } from 'react-icons/ai';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
const LogoutButton = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  // const googleResponse = async (response) => {
  //   await localStorage.clear();
  //   setUser(null);

  //   navigate('/login', { replace: true });
  // };
  const handleSignout = async (e) => {
    e.preventDefault();
    await localStorage.clear();
    await sessionStorage.clear();
    setUser(null);
    navigate('/login', { replace: true });
  };
  return (
    <button
      className="bg-white p-3 rounded-full flex flex-row gap-2 justify-center items-center cursor-pointer outline-none shadow-lg font-bold"
      onClick={handleSignout}
    >
      Sign Out
      <AiOutlineLogout color="red" fontSize={21} />
    </button>
  );
};

export default LogoutButton;
