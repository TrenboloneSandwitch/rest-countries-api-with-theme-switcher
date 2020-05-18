import React, { useReducer } from "react";

export const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";

const TOGGLE_DARK = "TOGGLE_DARK";
const GET_THEME = "GET_THEME";
const initialTheme = {
  isDark: false,
};

const reducer = (state = initialTheme, action) => {
  if ((action.type = TOGGLE_DARK)) {
    console.log(state);
    const isDark = state.isDark;

    return { ...state, isDark: !isDark };
  }

  return state;
};

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialTheme);

  const toggleTheme = () => {
    dispatch({
      type: TOGGLE_DARK,
      payload: {},
    });
  };

  const value = { toggleTheme, state };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
