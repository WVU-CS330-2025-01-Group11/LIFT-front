import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router components
import Homepage from './Homepage'; // Import homepage
import ContactUs from './ContactUs'; // Import Contact Us page
import Tutorial from './Tutorial';
import About from './About';
import './style.css'; // Import CSS
import { GlobalProvider } from './GlobalState'; // Import global context provider

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/Tutorial" element={<Tutorial />} />
                    <Route path="/About" element={<About />} />
                </Routes>
            </Router>
        </GlobalProvider>
    );
}

export default App;
