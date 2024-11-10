import "./Navbar.css";
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    // map of url pathnames to pages, to initialise activePage with correct page
    const destinationToPage = {
        "/": "home",
        "/todolist": "todo"
    }

    // state for active page - will highlight behind active page in navbar
    const [activePage, setActivePage] = useState(destinationToPage[useLocation().pathname]);

    // function to update activePage on click
    const handlePageChange = (page) => {
        setActivePage(page);
    }

    return (
        <nav className="navbar">
            <ul>
                <NavbarItem 
                    isActive={activePage === "home"} 
                    itemName="Home" 
                    destination="/"
                    onClick={() => handlePageChange("home")}
                />
                <NavbarItem 
                    isActive={activePage === "todo"} 
                    itemName="Todolist" 
                    destination="/todolist"
                    onClick={() => handlePageChange("todo")}
                />
            </ul>
        </nav>
    );
}

function NavbarItem(props) {

    // destructuring props
    const { isActive, itemName, destination, onClick } = props;

    // adds 'active' class if set in props, will highlight behind navbar option
    return (
        <li className={`navbar-item ${isActive ? "active" : ""}`}>
            <Link to={destination} onClick={onClick}>
                {itemName}
            </Link>
        </li>
    );
}

export default Navbar;