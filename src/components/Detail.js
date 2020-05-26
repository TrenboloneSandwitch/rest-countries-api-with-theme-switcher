import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "@reach/router";
import axios from "axios";
import { endpoint } from "../config";
import { ThemeContext } from "../context/ThemeContext";

const Detail = () => {
  const { alpha3Code } = useParams();
  const [country, setCountry] = useState(null);
  const [neighbours, setNeighbours] = useState(null);
  const { state: theme } = useContext(ThemeContext);

  useEffect(() => {
    getCountry();

    async function getCountry() {
      const { data } = await axios.get(`${endpoint}/alpha/${alpha3Code}`);
      setCountry(data);
    }
  }, [alpha3Code]);

  useEffect(() => {
    if (!country || !country.borders.length) return;
    getNeighbours();

    async function getNeighbours() {
      const codes = country.borders.join().replace(/,/g, ";");
      const { data } = await axios.get(`${endpoint}/alpha?codes=${codes}`);
      const neighboursName = data.map((n) => {
        return { code: n.alpha3Code, name: n.name };
      });
      setNeighbours(neighboursName);
    }
  }, [country]);

  return (
    <div className="container">
      <Link
        to="/"
        className={`button mt-4 element-bg--${theme.isDark ? "dark" : "light"}`}
      >
        <i className="fa fa-arrow-left" /> BACK
      </Link>
      {!country ? (
        <p>Loading</p>
      ) : (
        <React.Fragment>
          <div className="detail-container">
            <div className="img-cont mt-4">
              <img src={country.flag} alt={`Flag of the ${country.name}`} />
            </div>
            <div className="information mt-4">
              <h1> {country.name}</h1>
              <div className="space-between align-top">
                <ul className="col information__list">
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
                <ul className="col information__list">
                  <li>
                    <span className="bold">Top Level Domain: </span>
                    {country.topLevelDomain.join().replace(/,/g, ", ")}
                  </li>
                  <li>
                    <span className="bold">Currencies: </span>
                    {country.currencies.map((currency) => currency.name).join()}
                  </li>
                  <li>
                    <span className="bold">Languages: </span>
                    {country.languages
                      .map((language) => language.name)
                      .join()
                      .replace(/,/g, ", ")}
                  </li>
                </ul>
              </div>
              <div className="borders mt-4">
                <span className="bold">Border Countries: </span>

                {!neighbours ? (
                  <span
                    className={`badge element-bg--${
                      theme.isDark ? "dark" : "light"
                    }`}
                  >
                    I have no friends :-(
                  </span>
                ) : (
                  <div className="borders__list">
                    {neighbours.map(({ code, name }) => (
                      <Link
                        to={`${`/detail/${code}`}`}
                        key={name}
                        className={`badge element-bg--${
                          theme.isDark ? "dark" : "light"
                        }`}
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Detail;
