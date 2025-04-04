import React from "react";
import LaunchForm from "./LaunchForm";
import LiftTabs from './LiftTabs';
import './style.css';
import LaunchInspection from "./LaunchInspection";
import SiteInspection from "./SiteInspection";

function Homepage() {
    const [activeTab, setActiveTab] = React.useState("new_launch");
    const [launchIndex, setLaunchIndex] = React.useState(0);
    const [loadedLaunches, setLoadedLaunches] = React.useState([]);
    const [autofillData, setAutofillData] = React.useState(null);
    const [selectedSite, setSelectedSite] = React.useState(null);

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
            <div className="header" background-color="red">
                <h1>HomeBar: in progress...</h1>
            </div>
            <div className="main-content">

                {
                activeTab === "new_launch" && (
                    <div className="panel">
                        <LaunchForm
                         setLoadedLaunches={setLoadedLaunches}
                         autofillData={autofillData}
                         setAutofillData={setAutofillData} />
                    </div>
                )}

                {
                activeTab === "launch_inspection" && (
                    <div className="panel">
                        <h2>Saved Launches</h2>
                        <LaunchInspection 
                         launchIndex={launchIndex}
                         saved_launches={loadedLaunches}
                         setLoadedLaunches={setLoadedLaunches} 
                         setActiveTab={setActiveTab}
                         setAutofillData={setAutofillData}  // pass the setter
                         />
                    </div>
                )}

                {
                activeTab === "sites_inspection" && (
                    <div className="panel">
                        <h2>Sites Inspection</h2>
                        <SiteInspection
                         site={selectedSite} />
                    </div>
                )}

                <div className="tabs">
                    <LiftTabs 
                     setActiveTab={setActiveTab}
                     setLaunchIndex={setLaunchIndex}
                     loadedLaunches = {loadedLaunches}
                     setAutofillData = {setAutofillData}
                        setSelectedSite={setSelectedSite}
                     />
                </div>

            </div>
        </>
    );
}
export default Homepage;