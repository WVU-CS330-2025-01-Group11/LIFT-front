import React from 'react';
import 'react-tabs/style/react-tabs.css';
import './style.css';

const LaunchInspection = ({ launchIndex, saved_launches }) => {
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