import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import './saved_launches.css';

function load_saved_launches() {
    const saved_launches = localStorage.getItem('saved_launches');
    console.log("Saved launches from localStorage:", saved_launches);
    if (saved_launches) {
        return JSON.parse(saved_launches);
    } else {
        return null;
    }
}

function card_click(index, setLaunchIndex, setActiveTab) {
    // Handle the click event for the card
    console.log("Card clicked:", index);
    setLaunchIndex(index);
    setActiveTab("launch_inspection");
}

function switch_to_launch_form(setActiveTab) {
    // Handle the switch to launch form
    console.log("Switching to launch form");
    setActiveTab("new_launch");
}
const SavedLaunches = ({ setLaunchIndex, setActiveTab, loadedLaunches }) => {
    console.log("Loaded launches:", loadedLaunches);
    
    return (
      <>
        <div className="saved-launches-list">
          <div className="saved-launch" onClick={() => switch_to_launch_form(setActiveTab)}>
            <h2>Add launch</h2>
          </div>
          {loadedLaunches && loadedLaunches.map((launch, index) => (
            <div 
              key={index} 
              className="saved-launch" 
              onClick={() => card_click(index, setLaunchIndex, setActiveTab)}
            >
              <h3>{launch.name}</h3>
              <p>Date: {launch.date}</p>
              <p>Time: {launch.time}</p>
              <p>Location: {launch.loc}</p>
            </div>
          ))}
        </div>
      </>
    );
  };

export default SavedLaunches;