import "./Navbar.css";
import React, { useState } from 'react';

function Navbar() {

    // state for active page - will highlight behind active page in navbar
    const [activePage, setActivePage] = useState("home");

    return (
        <nav className="navbar">

        </nav>
    );
}

export default Navbar;