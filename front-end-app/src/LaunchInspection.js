import React from 'react';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import { GlobalContext } from './GlobalState.js';

function deleteButton({ index, setLoadedLaunches, setActiveTab }) {
    console.log("Delete button clicked");
    const savedLaunches = JSON.parse(localStorage.getItem('saved_launches')) || [];
    savedLaunches.splice(index, 1);
    localStorage.setItem('saved_launches', JSON.stringify(savedLaunches));
    console.log("Launch deleted:", index);
    setLoadedLaunches(savedLaunches);
    console.log("Updated saved launches:", savedLaunches);
    setActiveTab("new_launch");
}

const LaunchInspection = () => {
    const {
        launchIndex,
        loadedLaunches,
        setLoadedLaunches,
        setActiveTab,
        setAutofillData
    } = React.useContext(GlobalContext);

    if (!loadedLaunches || launchIndex < 0 || launchIndex >= loadedLaunches.length) {
        return (
            <div className="no-launches">
                <h3>No saved launches available</h3>
            </div>
        );
    }
    
    const launch = loadedLaunches[launchIndex];
    console.log("Saved launches (inspection panel):", loadedLaunches);
    console.log("Launch index (inspection panel):", launchIndex);
    console.log("Launch (inspection panel):", launch);

    return (
        <>
            {launch ? (
                <div key={launchIndex} className="saved-launch">
                    <h3>{launch.name}</h3>
                    <p>Date: {launch.date}</p>
                    <p>Time: {launch.time}</p>
                    <p>Location: {launch.loc}</p>
                    <p>Launch Index: {launchIndex}</p>
                    <p>Altitude: {launch.altitude}</p>
                    <p>Temperature: {launch.temp}</p>
                    <p>Rocket Weight: {launch.weight}</p>

                    <button 
                      className="edit-button" 
                      onClick={() => {
                         console.log("Edit launch", launchIndex);
                         setAutofillData(launch); // update autofill data
                         setActiveTab("new_launch"); // switch to launch form
                      }} 
                    />
                    <button 
                     className="delete-button" 
                     onClick={() => deleteButton({ index: launchIndex, setLoadedLaunches, setActiveTab })} 
                    />
                </div>
            ) : (
                <div className="no-launches">
                    <h3>No saved launches available</h3>
                </div>
            )}
        </>
    );
};

export default LaunchInspection;