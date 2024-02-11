import React, {useEffect, useState, useRef} from 'react';
import Dropdown from './Dropdown';
import BubbleCharts from './BubbleCharts';
import Histogram from './Histogram';
import db_data from './db_consolidated.json';
import adani_data from './adani_consolidated.json';
import yesbank_data from './yesbank_consolidated.json';
import maybank_data from './maybank_consolidated.json';
import tesla_data from './tesla_consolidated.json';
import tml_data from './tml_consolidated.json';
import ge_data from './ge_consolidated.json';
import rel_data from './rel_consolidated.json';

import CompanyDropdown from './CompanyDropdown';
//import data from './Data';

const App = () => {

 
 
    const [selectedPeriod, setSelectedPeriod] = useState("Sep-2023");
    const [selectedCompany, setSelectedCompany] = useState("Deutsche Bank");

    let companies = ["Deutsche Bank", "Adani Group", "Yes Bank", "May Bank", "Tesla Inc", "Tata Motors Ltd", "General Electric","Reliance Industries"];

    const dt = useRef(db_data);
    const periods = useRef(db_data.selection_period);

    
    const handlePeriodChange = (newPeriod) => {
      setSelectedPeriod(newPeriod.target.value);
    };

    const handleCompanyChange = (newCompany) => {

      switch(newCompany.target.value){
        case "Reliance Industries": {
          dt.current = rel_data;
          periods.current = dt.current.selection_period;
          setSelectedPeriod("Sep-2023")
        }
        break;

        case "General Electric": {
          dt.current = ge_data;
          periods.current = dt.current.selection_period;
          setSelectedPeriod("Sep-2023")
        }
        break;
        case "Tata Motors Ltd": {
          dt.current = tml_data;
          periods.current = dt.current.selection_period;
          setSelectedPeriod("Sep-2023")
        }
        break;
        case "Tesla Inc": {
          dt.current = tesla_data;
          periods.current = dt.current.selection_period;
          setSelectedPeriod("Sep-2023")
        }
        break;
        case "Adani Group": {
          dt.current = adani_data;
          periods.current = dt.current.selection_period;
          setSelectedPeriod("Mar-2023")
          
        }
        break;
        case "Yes Bank": {
          dt.current= yesbank_data;
          periods.current = dt.current.selection_period;
          setSelectedPeriod("Mar-2020")
        }
        break;
        case "May Bank": {
          dt.current = maybank_data;
          periods.current = dt.current.selection_period;
        }
        break;
        default :{

            dt.current = db_data;
            periods.current = dt.current.selection_period;
            setSelectedPeriod("Sep-2023")
          break;
        }

      }
      setSelectedCompany(newCompany.target.value);
      console.log("Changed company"+ newCompany.target.value);
      console.log("Changed data"+ dt['company']);
    };

    // ... Pass selectedYear and handle year change to child components

    return (
      <div>
        <table>
          <tr><th>&nbsp;</th><th>Global News Synopsis</th><th><CompanyDropdown companies={companies} selectedCompany={selectedCompany} onCompanyChange={handleCompanyChange} /></th></tr>
        <tr><td>&nbsp;</td><td>
        <Histogram data={dt.current} selectedCompany={selectedCompany}  selectedPeriod={selectedPeriod} />
        </td>
        </tr>
        <tr><td>&nbsp;</td><td>Select Period</td><td>
        <Dropdown periods={periods.current} selectedCompany={selectedCompany}  selectedPeriod={selectedPeriod} onPeriodChange={handlePeriodChange} />
          </td></tr>
          <tr><br></br></tr>
          <tr><td>&nbsp;</td><td>
        <BubbleCharts data={dt.current} selectedCompany={selectedCompany}  selectedPeriod={selectedPeriod} />
        </td>
        </tr>
      </table>
      </div>
    );
  };
  
  export default App;