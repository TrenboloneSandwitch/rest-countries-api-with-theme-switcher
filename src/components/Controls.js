import React, { useContext, useEffect } from "react";
import useDropdown from "../hooks/useDropdown";
import { CountriesContext } from "../context/CountriesContext";

const initialRegions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const Controls = () => {
  const [region, RegionDropdown] = useDropdown("Region", "", initialRegions);
  const { changeRegion } = useContext(CountriesContext);

  useEffect(() => {
    changeRegion(region);
  }, [region]);

  return (
    <div className="container space-between controls">
      <input />
      <RegionDropdown />
    </div>
  );
};

export default Controls;
