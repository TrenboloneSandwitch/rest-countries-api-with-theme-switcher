import React, { useState, useEffect } from "react";
import { useParams, Link } from "@reach/router";
import axios from "axios";
import { endpoint } from "../config";

const Detail = () => {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    async function getCountry() {
      const { data } = await axios.get(`${endpoint}/alpha/${alpha3Code}`);
      setCountry(data);
    }

    getCountry();
  }, []);

  return (
    <div className="container">
      <Link to="/">BACK</Link>
      {!country ? (
        <p>Loading</p>
      ) : (
        <React.Fragment>
          <div className="detail-container">
            <img src={country.flag} alt={`Flag of the ${country.name}`} />
            <div className="information">
              <h1> {country.name}</h1>
              <ul className="cl">
                <li>
                  <span className="bold">Native Name: </span>
                  {country.nativeName}
                </li>
                <li>
                  <span className="bold">Population: </span>
                  {country.population.toLocaleString("en")}
                </li>
                <li>
                  <span className="bold">Region: </span>
                  {country.region}
                </li>
                <li>
                  <span className="bold">Sub Region: </span>
                  {country.subregion}
                </li>
                <li>
                  <span className="bold">Capital: </span>
                  {country.capital}
                </li>
              </ul>
              <ul className="cl">
                <li>
                  <span className="bold">Top Level Domain: </span>
                  {country.topLevelDomain.map((domain) => domain)}
                </li>
                <li>
                  <span className="bold">Currencies: </span>
                  {country.currencies.map((currency) => currency.name + ", ")}
                </li>
                <li>
                  <span className="bold">Languages: </span>
                  {country.languages.map((language) => language.name + ", ")}
                </li>
              </ul>
              <div className="borders">
                <span className="bold">Border Countries: </span>
                {country.borders.map((border) => border + " ")}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Detail;
