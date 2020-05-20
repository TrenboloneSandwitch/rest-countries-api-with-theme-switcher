export const endpoint = "https://restcountries.eu/rest/v2/all";
export const initialState = {
  result: null,
  loading: true,
  error: null,
  currentRegion: "",
};
export const initialTheme = { isDark: true };
export const reducerVars = {
  TOGGLE_DARK: "TOGGLE_DARK",
  LOADING: "LOADING",
  FILTER_DATA: "FILTER_DATA",
  RESPONSE_COMPLETE: "RESPONSE_COMPLETE",
  ERROR: "ERROR",
};
