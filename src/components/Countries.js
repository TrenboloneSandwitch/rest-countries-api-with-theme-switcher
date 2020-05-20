import React, { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import CountryCard from "./CountryCard";

const Countries = () => {
  const { state } = useContext(CountriesContext);
  const { data: allCountries, loading, error, currentRegion } = state;

  let filtredCountries = allCountries;
  if (currentRegion !== "") {
    filtredCountries = allCountries.filter(
      (country) => country.region === currentRegion
    );
  }

  return (
    <main className="container countries">
      {loading && !filtredCountries ? (
        <span>loading ...</span>
      ) : (
        filtredCountries.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))
      )}
      {error && <p>{error.message}</p>}
    </main>
  );
};

export default Countries;
