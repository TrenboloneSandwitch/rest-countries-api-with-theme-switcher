import React, { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import CountryCard from "./CountryCard";
import Controls from "./Controls";

const Countries = () => {
  const { state } = useContext(CountriesContext);
  const {
    data: allCountries,
    loading,
    error,
    currentRegion,
    searchQuery,
  } = state;

  const getCountries = () => {
    let filtredCountries = allCountries;
    if (currentRegion) {
      filtredCountries = allCountries.filter(
        (country) => country.region === currentRegion.value
      );
    }
    if (searchQuery !== "") {
      filtredCountries = allCountries.filter((country) =>
        country.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    return filtredCountries;
  };

  const filtredCountries = getCountries();

  return (
    <React.Fragment>
      <Controls />
      <main className="container countries">
        {loading && !filtredCountries ? (
          <span>loading ...</span>
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          filtredCountries.map((country) => (
            <CountryCard key={country.alpha3Code} country={country} />
          ))
        )}
      </main>
    </React.Fragment>
  );
};

export default Countries;
