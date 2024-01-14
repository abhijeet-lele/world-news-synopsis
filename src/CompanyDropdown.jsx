import React, { useState } from "react";



const CompanyDropdown = ({ companies,selectedCompany, onCompanyChange }) => {
    return (
      <select value={selectedCompany} onChange={onCompanyChange}>
        {companies.map((company) => (
          <option key={company} value={company}>
            {company}
          </option>
        ))}
      </select>
    );
  };
  
export default CompanyDropdown;
  