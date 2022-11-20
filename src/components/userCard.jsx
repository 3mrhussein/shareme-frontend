import React from 'react';
import { useNavigate } from 'react-router-dom';
const UserCard = ({
  showImg,
  showName,
  OnClick,
  redirect,
  imageWidth = 12,
  imageHeight = 12,
  user,
  fullRounded,
}) => {
  const navigate = useNavigate();
  const containerClassName = `flex items-center gap-2 rounded-2xl  `;
  const imgClassName = ` w-${imageWidth} md:w-${imageWidth} h-${imageHeight} ${
    fullRounded ? 'rounded-full' : 'rounded-2xl'
  } object-cover ${redirect && 'cursor-pointer'}`;
  const pClassName = `font-bold capitalize ${redirect && 'cursor-pointer'}`;

  return (
    <div
      className={containerClassName}
      onClick={() => {
        OnClick && OnClick();

        redirect && navigate(`/user-profile/${user?._id}`, { replace: true });
      }}
    >
      {showImg && (
        <img src={user?.image} className={imgClassName} alt="user-profile" />
      )}
      {showName && <p className={pClassName}>{user?.userName}</p>}
    </div>
  );
};

export default UserCard;
