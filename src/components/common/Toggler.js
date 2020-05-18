import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Toggler = () => {
  const { state: theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="toggler">
      Toggle {theme.isDark ? "light" : "dark"} side&nbsp;
      <input
        type="checkbox"
        id="switch"
        checked={theme.isDark}
        onChange={(e) => {
          toggleTheme();
        }}
      />
      <label htmlFor="switch">Toggle</label>
    </div>
  );
};

export default Toggler;
