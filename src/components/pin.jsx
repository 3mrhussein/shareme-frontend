import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { urlFor } from '../Utils/APIs/client';
import PinHovered from './pinHovered';
const Pin = ({ pin }) => {
  const [postHovered, setPostHovered] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setPostHovered(true);
    }
  }, []);
  const navigate = useNavigate();
  const [savingPost, setSavingPost] = useState(false);
  return (
    <div className="m-2">
      <div
        onMouseEnter={() => setPostHovered(true)}
        onMouseLeave={() => setPostHovered(false)}
        onClick={() => navigate(`/pin-detail/${pin?._id}`, { replace: true })}
        className="relative  cursor-zoom-in w-auto hover:shadow-lg rounded-lg overflow-hidden transition-all duration-500 ease-in-out"
      >
        <img
          className="rounded-lg w-full"
          alt="user-post"
          src={urlFor(pin?.image).width(250).url()}
        />
        {postHovered && (
          <PinHovered
            pin={pin}
            setSavingPost={setSavingPost}
            savingPost={savingPost}
          />
        )}
      </div>
      <Link
        className="flex items-center p-1 gap-2  "
        to={`/user-profile/${pin?.postedBy?._id}`}
      >
        <img
          src={pin?.postedBy?.image}
          className=" w-8 h-8 rounded-full object-cover"
          alt=""
        />
        <p className=" font-semibold capitalize">{pin?.postedBy?.userName}</p>
      </Link>
    </div>
  );
};

export default Pin;
