import React from "react";
import "font-awesome/css/font-awesome.css";

const SearchBox = ({ value, onChange, styles, placeholder }) => {
  const { bgCol, textCol } = styles;
  return (
    <div className="searchBox" style={{ backgroundColor: bgCol }}>
      <i className="fa fa-search" style={{ color: textCol }}></i>
      <input
        name="query"
        type="text"
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={placeholder}
        className="searchInput"
        style={{ color: textCol }}
      />
    </div>
  );
};

export default SearchBox;
