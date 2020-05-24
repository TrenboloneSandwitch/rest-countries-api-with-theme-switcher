import React, { useState } from "react";

const useDropdown = (
  label,
  defaultState,
  options,
  defaultValue,
  bgColor,
  textColor
) => {
  const [state, updateState] = useState(defaultState);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",

    border: "none",
    fontSize: "20px",
    padding: "10px",
    backgroundColor: "transparent",
    color: textColor,
    cursor: "pointer",
  };

  const dropdownHeader = {
    padding: "10px",
    backgroundColor: bgColor,
    width: "200px",
    borderRadius: "10px",
    margin: "5px 0",
    boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    zIndex: "10",
    position: "absolute",
    top: 0,
    left: 0,
  };
  const dropdownBody = {
    ...dropdownHeader,
    transform: "translateY(calc(0% + 75px))",
    zIndex: "0",
    position: "absolute",
  };

  const Dropdown = () => (
    <div style={{ position: "relative", width: "200px", height: "4em" }}>
      <div style={dropdownHeader}>
        {label && <label>{label}: </label>}
        <button style={buttonStyle}>
          <span>s{state}</span>
          <svg
            height="20"
            width="20"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            style={{ fill: textColor }}
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
          </svg>
        </button>
      </div>
      <ul style={dropdownBody}>
        <li
          style={{
            margin: "5px 10px",
          }}
          data-value=""
        >
          {defaultValue}
        </li>
        {options.map((option) => (
          <li
            style={{
              margin: "5px 10px",
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;
