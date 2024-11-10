import "./Navbar.css";
import React, { useState } from 'react';

function Navbar() {

    // state for active page - will highlight behind active page in navbar
    const [activePage, setActivePage] = useState("todo");

    return (
        <nav className="navbar">
            <ul>
                <NavbarItem 
                    isActive={activePage === "home" ? true : false} 
                    itemName="Home" 
                    destination="/"
                />
                <NavbarItem 
                    isActive={activePage === "todo" ? true : false} 
                    itemName="Todolist" 
                    destination="/todolist"
                />
            </ul>
        </nav>
    );
}

function NavbarItem(props) {

    // destructuring props
    const { isActive, itemName, destination } = props;

    // adds 'active' class if set in props, will highlight behind navbar option
    return (
        <li className={`navbar-item ${isActive ? "active" : ""}`}>
            <a href={destination}>
                {itemName}
            </a>
        </li>
    );
}

export default Navbar;