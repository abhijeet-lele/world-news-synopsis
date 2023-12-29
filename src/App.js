import React, {useState} from 'react';
import Dropdown from './Dropdown';
import BubbleCharts from './BubbleCharts';
import Histogram from './Histogram';
import data from './consolidated.json';
//import data from './Data';
const App = () => {
    const [selectedPeriod, setSelectedPeriod] = useState("Sep-2023");


    const handlePeriodChange = (newPeriod) => {
      setSelectedPeriod(newPeriod.target.value);
    };
  
    // ... Pass selectedYear and handle year change to child components
    let periods = data.selection_period;
    let dt = data
  
    return (
      <div>
        <table>
          <tr><th>&nbsp;</th><th>Global News Synopsis</th></tr>
        <tr><td>&nbsp;</td><td>
        <Histogram data={dt} selectedPeriod={selectedPeriod} />
        </td>
        </tr>
        <tr><td>&nbsp;</td><td>Select Period</td><td>
        <Dropdown periods={periods} selectedPeriod={selectedPeriod} onPeriodChange={handlePeriodChange} />
          </td></tr>
          <tr><br></br></tr>
          <tr><td>&nbsp;</td><td>
        <BubbleCharts data={dt} selectedPeriod={selectedPeriod} />
        </td>
        </tr>
      </table>
      </div>
    );
  };
  
  export default App;