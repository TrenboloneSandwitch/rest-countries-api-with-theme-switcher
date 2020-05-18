import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Toggler from "./common/Toggler";

const Navbar = () => {
  const { state: theme } = useContext(ThemeContext);

  return (
    <nav
      className={`container navbar element-bg--${
        theme.isDark ? "dark" : "light"
      }`}
    >
      <h2>Navbar</h2>
      <Toggler />
    </nav>
  );
};

export default Navbar;
