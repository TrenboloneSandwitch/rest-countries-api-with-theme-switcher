import axios from "axios";
import React, { useEffect } from "react";
import { fetchReducer } from "./reducers/countriesReducer";
import { useThunkReducer } from "../hooks/useThunkReducer";
import { endpoint, initialState, reducerVars } from "../config";

export const CountriesContext = React.createContext();
CountriesContext.displayName = "CountriesContext";

const {
  LOADING,
  RESPONSE_COMPLETE,
  ERROR,
  FILTER_DATA,
  SEARCH_STATE,
} = reducerVars;

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
  const { data: allCountries, currentRegion, searchQuery } = state;

  useEffect(() => {
    dispatch(fetchCountries);
  }, [dispatch]);

  const changeRegion = (selected) => {
    const currentRegion = selected.value === "" ? null : selected;
    dispatch({ type: FILTER_DATA, payload: { currentRegion } });
  };
  const searchState = (query) => {
    dispatch({ type: SEARCH_STATE, payload: { query: query } });
  };

  const value = { state, changeRegion, searchState };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};
