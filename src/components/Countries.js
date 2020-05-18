import React, { useEffect } from "react";
import { useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import _ from "lodash";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function getCountries() {
      const { data } = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(data);
    }
    getCountries();
  }, []);

  return (
    <main className="container countries">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </main>
  );
};

export default Countries;
