import React, { useState } from "react";



const Dropdown = ({ years,selectedYear, onYearChange }) => {
    return (
      <select value={selectedYear} onChange={onYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    );
  };
  
export default Dropdown;
  