
import { CircularPacking } from './CircularPacking.jsx';
import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const BubbleCharts = ({ data,  selectedCompany, selectedPeriod }) => {
    const [tabIndex, setTabIndex] = useState(1);
    let width = 900;
    let height = 900;
    // let filteredEntitiesData = {type: 'node',
    // name: "boss",
    // value: 2300,
    // children: [
    //   {type: 'leaf', name:"Mark", value: 90} ,
    //   {type: 'leaf', name:"Kumar", value: 10} 
    // ]};
    // let filteredPersonsData = {type: 'node',
    // name: "boss",
    // value: 200,
    // children: [
    //   {type: 'leaf', name:"Anish", value: 90} ,
    //   {type: 'leaf', name:"Kumar1", value: 10} 
    // ]};
    let filteredEntitiesData = data["entities_data"][selectedPeriod]
    let filteredPersonsData = data["persons_data"][selectedPeriod]
    
    return (
      <div>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
          <Tab>Entities</Tab>
          <Tab>Persons</Tab>
          </TabList>
          <TabPanel>
              <h2>Mentioned Entities in News for Period {selectedPeriod}</h2>
              <h3>Size is proportinal represents number of mentions</h3>
              <CircularPacking width={width} height={height} data={filteredEntitiesData} />
            </TabPanel>
            <TabPanel>
              <h2>Mentioned Individuals in News for Period {selectedPeriod}</h2>
              <h3>Size is proportinal represents number of mentions</h3>
              <CircularPacking width={width} height={height} data={filteredPersonsData} />
            </TabPanel>
        </Tabs>
        
      </div>
    );
  };
  export default BubbleCharts;