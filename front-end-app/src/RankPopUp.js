import React, { useState } from "react";
import './rankpopup.css';

export default function RankPopUp({ launchIndex, loadedLaunches }) {
    const [rankPopup, setRankPopUp] = useState(false);
    const [ratings, setRatings] = useState({
        "Dist": 0,
        "Temp": 0,
        "Wind S/": 0,
        "Cloudy": 0,
        "Direction": 0
    });
    const selectedLaunch = loadedLaunches[launchIndex];
    const togglePopup = () => {
        setRankPopUp(!rankPopup);
    };

    const handleRatingChange = (param, value) => {
        setRatings(prev => ({
            ...prev,
            [param]: value
        }));
    };

    return (
        <>
            <button onClick={togglePopup} className="rank-button">
                Rank
            </button>
            
            {rankPopup && (
                <div className="rankpopup" onClick={togglePopup}>
                    {/* Pop up window */}
                    <div className="rankpopupwindow" onClick={(e) => e.stopPropagation()}>
                        <button onClick={togglePopup} className="closebutton">
                            Close
                        </button>

                        <div className="parameters">
                            <ul>
                                {["Dist", "Temp", "Wind S/", "Cloudy", "Direction"].map((item) => (
                                    <li key={item}>
                                        <span>{item}</span>
                                        <select
                                            value={ratings[item]}
                                            onChange={(e) => handleRatingChange(item, parseInt(e.target.value))}
                                        >
                                            {[0, 1, 2, 3, 4, 5].map(num => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="content-area">
                            <div className="launch-details">
                                {/* Your launch details content would go here */}
                                {selectedLaunch ? (
                                    <>
                                        <h3>{selectedLaunch.name}</h3>
                                        <p>Date: {selectedLaunch.date}</p>
                                        <p>Time: {selectedLaunch.time}</p>
                                        <p>Location: {selectedLaunch.loc}</p>
                                    </>
                                ) : (
                                    <p></p>
                                )}
                            </div>

                            {/* Displays the current ranks */}
                            <div className="rankings-container">
                                <ul>
                                    {Object.entries(ratings).map(([param, rating]) => (
                                        <li key={param}>
                                            {param}: {rating}/5
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}