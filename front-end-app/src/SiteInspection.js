import React from 'react';
import 'react-tabs/style/react-tabs.css';
import './style.css';


const SiteInspection = ({ site }) => {


    return (
        <>
            {
                site ? (
                    // Render the selected launch details
                    <div key={site.id} className="saved-launch">
                        <h3>{site["Prefecture Name"]}</h3>
                        <p>Site: {site["State"]}</p>
                        <p>Latitude: {site["Latitude"]}</p>
                        <p>Longitude: {site["Longitude"]}</p>
                        <p>Zip Code: {site["Zip Code"]}</p>
                        <p>Elevation: {site["Elevation"]}</p>
                    </div>

                ) : (
                    <div className="no-launches">
                        <h3>No saved sites selected</h3>
                    </div>
                )

            }
        </>
    );
};

export default SiteInspection;