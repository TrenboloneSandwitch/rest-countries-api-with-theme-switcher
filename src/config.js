export const endpoint = "https://restcountries.eu/rest/v2/all";

export const initialState = {
  result: null,
  loading: true,
  error: null,
  currentRegion: null,
  searchQuery: "",
};
export const initialTheme = { isDark: true };

export const reducerVars = {
  TOGGLE_DARK: "TOGGLE_DARK",
  LOADING: "LOADING",
  FILTER_DATA: "FILTER_DATA",
  SEARCH_STATE: "SEARCH_STATE",
  RESPONSE_COMPLETE: "RESPONSE_COMPLETE",
  ERROR: "ERROR",
};

export const initialRegions = [
  { value: "", label: "All" },
  { value: "Africa", label: "Africa" },
  { value: "Americas", label: "Americas" },
  { value: "Asia", label: "Asia" },
  { value: "Europe", label: "Europe" },
  { value: "Oceania", label: "Oceania" },
];

export const selectColors = (bgCol, textCol) => {
  return {
    control: (styles) => ({
      ...styles,
      backgroundColor: bgCol,
      padding: "10px",
      width: "250px",
      border: "none",
      fontSize: "15px",
      height: "57px",
      boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
      borderRadius: "10px",
    }),
    indicatorSeparator: (styles) => ({ display: "none" }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: textCol,

      transition: "opacity 250ms ease",

      "&:hover": {
        color: textCol,
        opacity: 0.6,
      },
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: "transparent",
      opacity: isFocused ? 0.6 : 1,
      color: textCol,
    }),
    menu: (styles) => ({
      ...styles,
      backgroundColor: bgCol,
      borderRadius: "10px",
      boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
    }),
    placeholder: (styles) => ({ ...styles }),
    singleValue: (styles) => ({
      ...styles,
      color: textCol,
    }),
    input: (styles) => ({ ...styles, color: textCol }),
  };
};
