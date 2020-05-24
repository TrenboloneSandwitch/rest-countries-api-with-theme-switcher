import React, { useContext } from "react";
import Select from "react-select";
import { selectColors, initialRegions } from "../config";
import { CountriesContext } from "../context/CountriesContext";
import { ThemeContext } from "../context/ThemeContext";
import SearchBox from "./common/SearchBox";

const Controls = () => {
  const { changeRegion, searchState, state } = useContext(CountriesContext);
  const { searchQuery, currentRegion } = state;
  const { state: theme } = useContext(ThemeContext);

  const bgCol = theme.isDark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)";
  const textCol = theme.isDark ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)";

  return (
    <div className="container space-between controls align-center">
      <SearchBox
        value={searchQuery}
        onChange={(e) => searchState(e)}
        styles={{ bgCol, textCol }}
        placeholder="Search for a country..."
      />
      <Select
        isSearchable={false}
        styles={selectColors(bgCol, textCol)}
        value={currentRegion}
        options={initialRegions}
        placeholder="Filter by Region"
        onChange={(e) => changeRegion(e)}
      />
    </div>
  );
};

export default Controls;
