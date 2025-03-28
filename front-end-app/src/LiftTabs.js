import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
const LiftTabs = () => {
  return (
    <div className="launchsites">
      <Tabs>
        <TabList>
          <Tab>Sites</Tab> 
          <Tab>Launches</Tab> 
          <Tab>Saved Launches</Tab>
        </TabList>

        <TabPanel>
          <p>Add Launch Sites</p>
        </TabPanel>

        <TabPanel>
          <p>Add Launches</p>
        </TabPanel>

        <TabPanel>
        <p>Add Saved launches</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default LiftTabs;