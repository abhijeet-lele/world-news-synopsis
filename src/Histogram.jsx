import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);


const Histogram = ({ data, selectedPeriod }) => {
  console.log(data)
  const [tabIndex, setTabIndex] = useState(1);
  
    // ... Filter data based on selected year and tab
    
  //   let filteredTonalityData =  {
  //     labels : ['J','F','M','A','M','J','J'],
  //     datasets: [{
  //         barPercentage: 0.5,
  //         barThickness: 6,
  //         maxBarThickness: 8,
  //         minBarLength: 2,
  //         data: [-0.10, 0.20, -0.30, 0.40, -0.50, 0.60, -0.70],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(255, 205, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(201, 203, 207, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgb(255, 99, 132)',
  //           'rgb(255, 159, 64)',
  //           'rgb(255, 205, 86)',
  //           'rgb(75, 192, 192)',
  //           'rgb(54, 162, 235)',
  //           'rgb(153, 102, 255)',
  //           'rgb(201, 203, 207)'
  //         ],
  //         borderWidth: 1
  //     }]
  // };
    let filteredTonalityData = data['tonality'];
  //   let filteredActiveWordsData = {
  //     labels : ['J','F','M','A','M','J','J'],
  //     datasets: [{
  //         barPercentage: 0.5,
  //         barThickness: 6,
  //         maxBarThickness: 8,
  //         minBarLength: 2,
  //         data: [-0.10, 0.20, -0.30, 0.40, -0.50, 0.60, -0.70],

  //   backgroundColor: [
  //     'rgba(255, 99, 132, 0.2)',
  //     'rgba(255, 159, 64, 0.2)',
  //     'rgba(255, 205, 86, 0.2)',
  //     'rgba(75, 192, 192, 0.2)',
  //     'rgba(54, 162, 235, 0.2)',
  //     'rgba(153, 102, 255, 0.2)',
  //     'rgba(201, 203, 207, 0.2)'
  //   ],
  //   borderColor: [
  //     'rgb(255, 99, 132)',
  //     'rgb(255, 159, 64)',
  //     'rgb(255, 205, 86)',
  //     'rgb(75, 192, 192)',
  //     'rgb(54, 162, 235)',
  //     'rgb(153, 102, 255)',
  //     'rgb(201, 203, 207)'
  //   ],
  //   borderWidth: 1
  //     }]
  // };
  let filteredActiveWordsData = data['context_width'];
    let opt ={
      responsive: true,
      /*plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Bar Chart'
        }
      }*/
    }

    return (
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
          <Tab>Tonality</Tab>
          <Tab>ContextWidth</Tab>
          </TabList>
          <TabPanel>
      <h2>Tonality</h2>
      <Chart type="line" data={filteredTonalityData}  options = {opt}/>
      </TabPanel>
      <TabPanel>
      <h2>Context Width - absence of pronouns</h2>
      <Chart type="line" data={filteredActiveWordsData} options = {opt} />
      </TabPanel>
        </Tabs>
      </div>
    );
  };
  export default Histogram;