import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Toggler from "./common/Toggler";

const Navbar = () => {
  const { state: theme } = useContext(ThemeContext);

  return (
    <nav
      className={`container navbar space-between element-bg--${
        theme.isDark ? "dark" : "light"
      }`}
    >
      <h2>Where in the world?</h2>
      <Toggler />
    </nav>
  );
};

export default Navbar;
