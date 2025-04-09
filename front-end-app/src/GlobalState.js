import React, {createContext, useState, useEffect} from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState("new_launch");
    const [launchIndex, setLaunchIndex] = useState(0);
    const [loadedLaunches, setLoadedLaunches] = useState([]);
    const [autofillData, setAutofillData] = useState(null);
    const [selectedSite, setSelectedSite] = useState(null);

    // Load saved launches on component mount
    useEffect(() => {
        const saved = localStorage.getItem('saved_launches');
        if (saved) {
            console.log("Saved launches from localStorage:", JSON.parse(saved));
            setLoadedLaunches(JSON.parse(saved));
        }
    }, []);

    return (
        <GlobalContext.Provider value={{ activeTab, setActiveTab, launchIndex, setLaunchIndex, loadedLaunches, setLoadedLaunches, autofillData, setAutofillData, selectedSite, setSelectedSite }}>
            {children}
        </GlobalContext.Provider>
    );
}