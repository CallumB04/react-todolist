import "./Navbar.css";
import React, { useState } from 'react';

function Navbar() {

    // state for active page - will highlight behind active page in navbar
    const [activePage, setActivePage] = useState("home");

    return (
        <nav className="navbar">
            <ul>
                <NavbarItem isActive={true} itemName="Home" />
                <NavbarItem isActive={false} itemName="Todolist" />
            </ul>
        </nav>
    );
}

function NavbarItem(props) {

    // destructuring props
    const { isActive, itemName } = props;

    // adds 'active' class if set in props, will highlight behind navbar option
    return (
        <li className={`navbar-item ${isActive ? "active" : ""}`}>
            {itemName}
        </li>
    );
}

export default Navbar;