import { useContext, useEffect } from 'react';
import { LoadingContext } from '../context/loadingContext';

const useLoading = (flag = true, msg = 'Loading...', opacity = '1') => {
  const { setPageLoading } = useContext(LoadingContext);
  useEffect(() => {
    setPageLoading({
      loading: flag,
      loadingMsg: msg,
      bgOpacity: opacity,
    });
  }, [flag, msg, opacity, setPageLoading]);
  return;
};

export default useLoading;
