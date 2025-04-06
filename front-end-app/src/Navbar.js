import React from 'react';
import './navbar.css';

function Navbar() {
    return(
        <>
            <nav className="nav">
                <a href="/" className="lift">
                    LIFT
                </a>
                <ul>
                    <li>
                        <a href="/contactus">Contact Us</a>
                    </li>
                    <li>
                        <a href="/tutorial">Tutorial</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                </ul>
            </nav>        
        </>
    );
}
export default Navbar;