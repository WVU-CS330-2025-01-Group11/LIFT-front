import React from "react";
import LaunchForm from "./LaunchForm";
import LiftTabs from './LiftTabs';
import './style.css';

function Homepage(){

    return(
        <>
            <div className="header" background-color="red">
                
                <h1>HomeBar: in progress...</h1>
            </div>
            <div className="main-content">
            <div className="newlaunch">
                
                <LaunchForm />
            </div>
                <LiftTabs /> 
            </div>
        </>
    );
}
export default Homepage;