import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CountryCard = ({ country }) => {
  const { state: theme } = useContext(ThemeContext);
  return (
    <a
      href="#!"
      className={`country-card element-bg--${theme.isDark ? "dark" : "light"}`}
    >
      <div className="country-card__flag-container">
        <img
          className="country-card__flag-img"
          alt={`${country.name} national flag`}
          src={country.flag}
        />
      </div>
      <div className="country-card__content">
        <h3>{country.name}</h3>
        <ul>
          <li>
            <span className="bold">Population: </span>
            {country.population.toLocaleString("en")}
          </li>
          <li>
            <span className="bold">Region: </span>
            {country.region}
          </li>
          <li>
            <span className="bold">Berlin: </span>
            {country.capital}
          </li>
        </ul>
      </div>
    </a>
  );
};

export default CountryCard;
