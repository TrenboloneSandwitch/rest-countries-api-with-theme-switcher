import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import Controls from "./components/Controls";
import "./App.scss";

function App() {
  const { state: theme } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={
        theme.isDark
          ? { backgroundColor: "hsl(207, 26%, 17%)", color: "white" }
          : { backgroundColor: "hsl(0, 0%, 98%)", color: "hsl(200, 15%, 8%)" }
      }
    >
      <Navbar />
      <Controls />

      <Countries />
    </div>
  );
}

export default App;
