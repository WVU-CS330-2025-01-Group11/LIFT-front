import React from 'react';
import 'react-tabs/style/react-tabs.css';
import './style.css';


function deleteButton({ index, setLoadedLaunches, setActiveTab }) {
    console.log("Delete button clicked");

    // Remove the selected launch from the saved launches
    
    const savedLaunches = JSON.parse(localStorage.getItem('saved_launches')) || [];
    savedLaunches.splice(index, 1);
    localStorage.setItem('saved_launches', JSON.stringify(savedLaunches));
    console.log("Launch deleted:", index);
    // Update the state to reflect the deletion
    setLoadedLaunches(savedLaunches);
    console.log("Updated saved launches:", savedLaunches);

    //switch back to the launch form
    setActiveTab("new_launch");

}

const LaunchInspection = ({ launchIndex, saved_launches, setLoadedLaunches, setActiveTab, setAutofillData }) => {
    // Ensure the selected launch exists
    if (!saved_launches || launchIndex < 0 || launchIndex >= saved_launches.length) {
        return (
            <div className="no-launches">
                <h3>No saved launches available</h3>
            </div>
        );
    }
    
    const launch = saved_launches[launchIndex];

    console.log("Saved launches (inspection panel):", saved_launches);

    console.log("Launch index (inspection panel):", launchIndex);
    console.log("Launch (inspection panel):", launch);

    return (
        <>
            {launch ? (
                // Render the selected launch details
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
                // Render a fallback message if no launches are available
                <div className="no-launches">
                    <h3>No saved launches available</h3>
                </div>
            )}
        </>
    );
};

export default LaunchInspection;