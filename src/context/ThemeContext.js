import React, { useReducer } from "react";
import { initialTheme, reducerVars } from "../config";
import { themeReducer } from "./reducers/themeReducers";

export const ThemeContext = React.createContext();
ThemeContext.displayName = "ThemeContext";
const { TOGGLE_DARK } = reducerVars;

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialTheme);

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
