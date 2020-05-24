import { reducerVars } from "../../config";
const {
  LOADING,
  RESPONSE_COMPLETE,
  ERROR,
  FILTER_DATA,
  SEARCH_STATE,
} = reducerVars;

export const fetchReducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      currentRegion: null,
      searchQuery: "",
      data: null,
      loading: true,
      error: null,
    };
  }
  if (action.type === RESPONSE_COMPLETE) {
    return {
      currentRegion: null,
      searchQuery: "",
      data: action.payload.data,
      loading: false,
      error: null,
    };
  }
  if (action.type === ERROR) {
    return {
      currentRegion: null,
      searchQuery: "",
      data: null,
      loading: false,
      error: action.payload.error,
    };
  }

  if (action.type === FILTER_DATA) {
    return {
      ...state,
      currentRegion: action.payload.currentRegion,
      searchQuery: "",
    };
  }

  if (action.type === SEARCH_STATE) {
    return {
      ...state,
      searchQuery: action.payload.query,
      currentRegion: null,
    };
  }

  return state;
};
