//React Imports
import React, { useContext } from "react";
import LiftTabs from './LiftTabs';
//File imports
import LaunchForm from "./LaunchForm";
import LaunchInspection from "./LaunchInspection";
import SiteInspection from "./SiteInspection";
import Navbar from "./Navbar";
import './style.css';
import { GlobalContext } from "./GlobalState";
import RankPopUp from "./RankPopUp";

function Homepage() {
    const {
        activeTab,
        setActiveTab,
        launchIndex,
        loadedLaunches,
        autofillData,
        setAutofillData,
        selectedSite,
        setSelectedSite,
    } = useContext(GlobalContext);

    return (
        <>
            {console.log("Active Tab:", activeTab)}
            {console.log("Launch Index:", launchIndex)}
            <Navbar />
            <div className="main-content">

                {
                activeTab === "new_launch" && (
                    <div className="panel">
                        <LaunchForm />
                    </div>
                )}

                {
                activeTab === "launch_inspection" && (
                    <div className="panel">
                        <h2>Saved Launches</h2>
                        <LaunchInspection />
                        <RankPopUp
                        launchIndex={launchIndex}
                        loadedLaunches={loadedLaunches}
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
                    <LiftTabs />
                </div>

            </div>
        </>
    );
}
export default Homepage;