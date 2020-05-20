import { reducerVars } from "../../config";
const { LOADING, RESPONSE_COMPLETE, ERROR, FILTER_DATA } = reducerVars;

export const fetchReducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      currentRegion: "",
      data: null,
      loading: true,
      error: null,
    };
  }
  if (action.type === RESPONSE_COMPLETE) {
    return {
      currentRegion: "",
      data: action.payload.data,
      loading: false,
      error: null,
    };
  }
  if (action.type === ERROR) {
    return {
      currentRegion: "",
      data: null,
      loading: false,
      error: action.payload.error,
    };
  }

  if (action.type === FILTER_DATA) {
    return { ...state, currentRegion: action.payload.currentRegion };
  }

  return state;
};
