import React, { useContext } from "react";
import { Router } from "@reach/router";
import { ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Countries from "./components/Countries";
import Detail from "./components/Detail";
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

      <Router>
        <Countries path="/" />
        <Detail path="/detail/:alpha3Code" />
        {/* <CreateTournament path="/CreateTournament" />
        <NewGroup path="/NewGroup" />
        <Group path="/Group/:groupId" /> */}
      </Router>
    </div>
  );
}

export default App;
