import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './navbar.css';

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="lift">
                LIFT
            </Link>
            <ul>
                <li>
                    <Link to="/contactus">Contact Us</Link> {/* Use Link component */}
                </li>
                <li>
                    <Link to="/tutorial">Tutorial</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;