import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import { GlobalContext } from './GlobalState.js';

import SavedLaunches from "./SavedLaunches";
import SavedSites from "./SavedSites";


const LiftTabs = () => {
  const { activeTab, setActiveTab } = React.useContext(GlobalContext);
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
          <SavedSites />
        </TabPanel>

        <TabPanel>
            <SavedLaunches />
        </TabPanel>

      </Tabs>
    </div>
  );
};

export default LiftTabs;