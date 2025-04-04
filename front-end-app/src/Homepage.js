//React Imports
import React from "react";
import LiftTabs from './LiftTabs';
//File imports
import LaunchForm from "./LaunchForm";
import LaunchInspection from "./LaunchInspection";
import Navbar from "./Navbar";
import './style.css';

function Homepage() {
    const [activeTab, setActiveTab] = React.useState("new_launch");
    const [launchIndex, setLaunchIndex] = React.useState(0);
    const [loadedLaunches, setLoadedLaunches] = React.useState([]);

    // Load saved launches on component mount
    React.useEffect(() => {
        const saved = localStorage.getItem('saved_launches');
        if (saved) {
            console.log("Saved launches from localStorage:", JSON.parse(saved));
            setLoadedLaunches(JSON.parse(saved));
        }
    }, []);
    console.log("Loaded launches:", loadedLaunches);


    return (
        <>
            
            <Navbar />
            <div className="main-content">

                {
                activeTab === "new_launch" && (
                    <div className="panel">
                        <LaunchForm setLoadedLaunches={setLoadedLaunches} />
                    </div>
                )}

                {
                activeTab === "launch_inspection" && (
                    <div className="panel">
                        <h2>Saved Launches</h2>
                        <LaunchInspection launchIndex={launchIndex} saved_launches={loadedLaunches} />
                    </div>
                )}

                {
                activeTab === "sites_inspection" && (
                    <div className="panel">
                        <h2>Sites Inspection</h2>
                        <p>Under construction...</p>
                    </div>
                )}

                <div className="tabs">
                    <LiftTabs 
                     setActiveTab={setActiveTab}
                     setLaunchIndex={setLaunchIndex}
                     loadedLaunches = {loadedLaunches} />
                </div>

            </div>
        </>
    );
}
export default Homepage;