import { createContext, useEffect, useReducer } from 'react';

import React from 'react';
import { getAllPins } from '../APIs/pinsAPI';

export const PinContext = createContext(null);
function pinReducer(state, action) {
  switch (action.type) {
    case 'FETCH_PINS':
      return { ...state, isLoading: true };
    case 'FETCH_PIN_SUCCESS':
      return { ...state, isLoading: false, data: action.data };
    case 'FETCH_PIN_FAILURE':
      return { ...state, isLoading: false, error: action.error };
    case 'DELETE_PIN':
      return { ...state, data: state.data.filter((pin) => pin._id !== action.payload) };
    case 'CREATE_NEW_PIN': {
      return { ...state, data: [action.payload, ...state.data] };
    }
    default:
      return { ...state };
  }
}
export const PinContextProvider = ({ children }) => {
  const [pins, dispatch] = useReducer(pinReducer, { data: [], error: null, isLoading: false });

  useEffect(() => {
    const fetchPins = async () => {
      dispatch({ type: 'FETCH_PINS' });
      try {
        const data = await getAllPins();
        dispatch({ type: 'FETCH_PIN_SUCCESS', data });
      } catch (e) {
        dispatch({ type: 'FETCH_PIN_FAILURE', error: 'error occurred while fetching data' });
      }
    };

    fetchPins();
  }, []);
  const removePinFromState = (pinID) => {
    dispatch({ type: 'DELETE_PIN', payload: pinID });
  };
  return (
    <PinContext.Provider value={{ pins, dispatch, removePinFromState }}>
      {children}
    </PinContext.Provider>
  );
};
