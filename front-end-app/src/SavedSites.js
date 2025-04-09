import React, { useState, useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';
import './style.css';
import './saved_launches.css';
import { GlobalContext } from './GlobalState.js';

function card_click(site, setActiveTab, setSelectedSite) {
    // Handle the click event for the card
    console.log("Card clicked:", site);

    setSelectedSite(site);
    
}

const SavedSites = () => {
    const { setActiveTab, setSelectedSite } = React.useContext(GlobalContext);
    const [sites, setSites] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/sites", {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                console.log("Sites data:", data);
                setSites(data);
            })
            .catch(error => {
                console.error('Error fetching sites:', error);
            });
    }, []);
    
    return (
      <>
        <div className="saved-launches-list">
        {

            !sites || sites.length === 0 ? (
                <div className="saved-launch">
                    <h2>Could not obtain sites.</h2>
                </div>
            ) : (
            sites.map((site, index) => (
                <div 
                  key={index} 
                  className="saved-launch" 
                  onClick={() => card_click(site, setActiveTab, setSelectedSite)}
                >
                <h3>{site["Prefecture Name"]}</h3>
                <p>Location: {site['State']}</p>
                </div>
            )))
        }
        </div>
      </>
    );
  };

export default SavedSites;