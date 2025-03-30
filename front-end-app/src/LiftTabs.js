import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';

import SavedLaunches from "./SavedLaunches";


const LiftTabs = ({ setActiveTab, setLaunchIndex, loadedLaunches }) => {
  console.log("Loaded launches (LiftTabs):", loadedLaunches);
  return (
    <div className="launchsites">
      <Tabs
        defaultIndex={2} // Set the default tab to the first one (index 0)
        onSelect={(index) => {
          // Update active tab based on the selected index
          if (index === 0) setActiveTab("sites_inspection");
          else if (index === 1) setActiveTab("launch_inspection");
        }}
      >
        <TabList>
          <Tab>Sites</Tab>
          <Tab>Launches</Tab>
        </TabList>

        <TabPanel>
          <p>Add Launch Sites</p>
        </TabPanel>

        <TabPanel>
            <SavedLaunches
             setLaunchIndex={setLaunchIndex}
             setActiveTab={setActiveTab}
             loadedLaunches={loadedLaunches}/>
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default LiftTabs;