import { reducerVars } from "../../config";
const { LOADING, RESPONSE_COMPLETE, ERROR } = reducerVars;

export const fetchReducer = (state, action) => {
  if (action.type === LOADING) {
    return {
      data: null,
      loading: true,
      error: null,
    };
  }
  if (action.type === RESPONSE_COMPLETE) {
    return {
      data: action.payload.data,
      loading: false,
      error: null,
    };
  }
  if (action.type === ERROR) {
    return {
      data: null,
      loading: false,
      error: action.payload.error,
    };
  }
  return state;
};
