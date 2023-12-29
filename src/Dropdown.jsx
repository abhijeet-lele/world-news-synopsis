import React, { useState } from "react";



const Dropdown = ({ periods,selectedPeriod, onPeriodChange }) => {
    return (
      <select value={selectedPeriod} onChange={onPeriodChange}>
        {periods.map((period) => (
          <option key={period} value={period}>
            {period}
          </option>
        ))}
      </select>
    );
  };
  
export default Dropdown;
  