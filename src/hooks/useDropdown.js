import React, { useState } from "react";

const useDropdown = (label, defaultState, options) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <select
      className=""
      id={id}
      value={state}
      onChange={(e) => updateState(e.target.value)}
      onBlur={(e) => updateState(e.target.value)}
      disabled={!options.length}
    >
      <option value="">Filter by Region</option>
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
