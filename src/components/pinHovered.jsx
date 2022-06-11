import React from 'react';
import { savePinByCurrentUser } from '../Utils/APIs/pinsAPI';
import { fetchUserFromLocalStorage } from '../Utils/APIs/userAPI';
import PinDeleteButton from './pinDeleteButton';
import PinDestinationButton from './pinDestinationButton';
import PinDownloadIcon from './pinDownloadIcon';
import PinSaveButton from './pinSaveButton';
const PinHovered = ({
  pin: { postedBy, image, _id, destination, save },
  setSavingPost,
  savingPost,
}) => {
  const user = fetchUserFromLocalStorage();
  //if array of save have the same user that login so it is already saved
  const alreadySaved = save?.filter(
    (item) => item.postedBy._id === user?._id
  )?.length;
  const savePin = (id) => {
    if (user) {
      if (!alreadySaved) {
        setSavingPost(true);
        savePinByCurrentUser(id, user?._id).then(() => {
          window.location.reload();
          setSavingPost(false);
        });
      }
    } else {
      window.alert('You must sign in to be able to save pins');
    }
  };

  return (
    <div
      className="absolute top-0 w-full h-full flex flex-col justify-between p-1 pr-2 pt-2  pb-2 z-50"
      style={{ height: '100%' }}
    >
      <div className="flex justify-between items-center">
        <PinDownloadIcon interaction url={image?.asset?.url} />
        <PinSaveButton
          alreadySaved={alreadySaved}
          savePin={savePin}
          _id={_id}
          savingPost={savingPost}
          save={save}
        />
      </div>
      <div className="flex justify-between z-50 items-center gap-2 ">
        <PinDestinationButton destination={destination} />
        {postedBy?._id === user?._id && <PinDeleteButton pinId={_id} />}
      </div>
    </div>
  );
};

export default PinHovered;
