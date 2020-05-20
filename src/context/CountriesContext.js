import axios from "axios";
import React, { useEffect } from "react";
import { fetchReducer } from "./reducers/countriesReducer";
import { useThunkReducer } from "../hooks/useThunkReducer";
import { endpoint, initialState, reducerVars } from "../config";

export const CountriesContext = React.createContext();
CountriesContext.displayName = "CountriesContext";

const { LOADING, RESPONSE_COMPLETE, ERROR } = reducerVars;

const fetchCountries = (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .get(endpoint)
    .then(({ data }) =>
      dispatch({
        type: RESPONSE_COMPLETE,
        payload: { data: data },
      })
    )
    .catch((error) => dispatch({ type: ERROR, payload: { error } }));
};

export const CountriesProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch(fetchCountries);
  }, [dispatch]);

  const value = { state };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
