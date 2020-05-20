import React, { useContext } from "react";
import { CountriesContext } from "../context/CountriesContext";
import CountryCard from "./CountryCard";

const Countries = () => {
  const { state } = useContext(CountriesContext);
  const { data, loading, error } = state;

  return (
    <main className="container countries">
      {loading && !data ? (
        <span>loading ...</span>
      ) : (
        data.map((country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))
      )}
      {error && <p>{error.message}</p>}
    </main>
  );
};

export default Countries;
