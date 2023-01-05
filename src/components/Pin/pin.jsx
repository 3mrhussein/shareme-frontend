import React, { useEffect, useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { MdDownloadForOffline } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { urlFor } from '../../Utils/APIs/client';
import { deletePinById } from '../../Utils/APIs/pinsAPI';
import { fetchUserFromLocalStorage } from '../../Utils/APIs/userAPI';
import SaveButton from '../SaveButton/SaveButton';
import './pin.css';

const hoveredItemClasses =
  'absolute md:hidden bg-white opacity-60 hover:opacity-100 outline-none p-2 font-bold gap-2 hover:shadow-sm';

const Pin = ({ pin }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUserFromLocalStorage().then((user) => {
      setUser(user);
    });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="m-2">
      <div
        onClick={() => navigate(`/pin-detail/${pin?._id}`, { replace: true })}
        className="pin-img relative cursor-zoom-in w-auto shadow-sm shadow-slate-600 rounded-lg overflow-hidden "
      >
        <a
          className={`${hoveredItemClasses} pin-img-download flex-center left-2 top-2 w-9 h-9 rounded-full text-2xl text-black`}
          href={pin?.image?.asset?.url + '?dl='}
          download
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <MdDownloadForOffline />
        </a>

        <SaveButton classes={hoveredItemClasses} user={user} pin={pin} />

        <a
          onClick={(e) => e.stopPropagation()}
          href={pin.destination}
          target="_blank"
          rel="noreferrer"
          className={`${hoveredItemClasses} pin-dest-lnk bottom-2 left-2 flex-center text-xs text-black rounded-full`}
          title={pin.destination}
        >
          <BsFillArrowUpRightCircleFill />
          {pin.destination.length > 20 ? `${pin.destination.slice(8, 18)}... ` : pin.destination}
        </a>

        {pin.postedBy._id === user?._id ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              deletePinById(pin._id);
            }}
            className={`${hoveredItemClasses} pin-delete-btn bottom-2 right-2  text-black text-base rounded-3xl`}
          >
            <AiTwotoneDelete />
          </button>
        ) : null}

        <img
          className="rounded-lg min-h-150 bg-slate-200 w-full "
          alt="user-post"
          src={urlFor(pin?.image).width(250).url()}
          loading="lazy"
        />
      </div>

      <Link className="flex items-center p-1 gap-2  " to={`/user-profile/${pin?.postedBy?._id}`}>
        <img src={pin?.postedBy?.image} className=" w-8 h-8 rounded-full object-cover" alt="" />
        <p className=" font-semibold capitalize">{pin?.postedBy?.userName}</p>
      </Link>
    </div>
  );
};

export default Pin;
