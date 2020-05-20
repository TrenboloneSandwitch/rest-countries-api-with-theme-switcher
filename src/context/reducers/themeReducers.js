import { reducerVars } from "../../config";

export const themeReducer = (state, action) => {
  if ((action.type = reducerVars.TOGGLE_DARK)) {
    const isDark = state.isDark;

    return { ...state, isDark: !isDark };
  }

  return state;
};
