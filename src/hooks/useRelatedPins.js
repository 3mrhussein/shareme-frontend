import { useReducer } from 'react';
import { useEffect } from 'react';
import { fetchPinsWithSameCategory } from '../APIs/pinsAPI';

function relatedPinReducer(state, action) {
  switch (action.type) {
    case 'FETCH_RELATED_PINS':
      return { ...state, isLoading: true };
    case 'FETCH_RELATED_PINS_SUCCESS':
      return { ...state, isLoading: false, data: action.data };
    case 'FETCH_RELATED_PINS_FAILURE':
      return { ...state, isLoading: false, error: action.error };
    default:
      return { ...state };
  }
}

const useRelated = (pin) => {
  const [relatedPins, dispatch] = useReducer(relatedPinReducer, {
    isLoading: false,
    error: null,
    data: [],
  });

  useEffect(() => {
    if (pin) {
      dispatch({ type: 'FETCH_RELATED_PINS' });
      fetchPinsWithSameCategory(pin)
        .then((response) => {
          dispatch({ type: 'FETCH_RELATED_PINS_SUCCESS', data: response[0] });
        })
        .catch((error) => {
          dispatch({ type: 'FETCH_RELATED_PINS_FAILURE', error });
        });
    }
  }, [pin]);

  return { relatedPins, dispatch };
};

export default useRelated;
