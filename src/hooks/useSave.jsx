import { useEffect, useState } from 'react';
import { fetchSaveList, savePinByCurrentUser, deleteUserFromSaveList } from '../APIs/pinsAPI';

const useSave = (pin, userId) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  useEffect(() => {
    fetchSaveList(pin._id).then((response) => {
      const saveList = response[0]?.save;

      const saveObject = saveList?.find((savedBy) => savedBy.userId === userId);
      if (saveObject) {
        setIsSaved(saveObject._key);
      } else setIsSaved(false);
    });
  }, [pin, userId]);

  const unSavePin = async () => {
    if (!userId) {
      window.alert('You must sign in to be able to save pins');
      return;
    } else if (isLoading) {
      return;
    } else if (isSaved) {
      try {
        setIsLoading(true);
        await deleteUserFromSaveList(pin._id, isSaved);
        setIsSaved(false);
      } catch (e) {
        alert('Failed to Un Save pin by current user');
      }
      setIsLoading(false);
    }
  };
  const savePin = async () => {
    if (!userId) {
      window.alert('You must sign in to be able to save pins');
      return;
    } else if (isLoading) {
      return;
    } else if (!isSaved) {
      try {
        setIsLoading(true);
        await savePinByCurrentUser(pin._id, userId);
        setIsSaved(true);
      } catch (e) {
        alert('Failed to save pin by current user');
      }
      setIsLoading(false);
    }
  };

  return { isSaved, isLoading, savePin, unSavePin };
};

export default useSave;
