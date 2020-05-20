export const endpoint = "https://restcountries.eu/rest/v2/all";
export const initialState = {
  result: null,
  loading: true,
  error: null,
};
export const initialTheme = { isDark: true };
export const reducerVars = {
  TOGGLE_DARK: "TOGGLE_DARK",
  LOADING: "LOADING",
  RESPONSE_COMPLETE: "RESPONSE_COMPLETE",
  ERROR: "ERROR",
};
