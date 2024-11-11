import "./Navbar.css";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    // map of url pathnames to pages, to initialise activePage with correct page
    const destinationToPage = {
        "/": "home",
        "/todolist": "todo"
    }

    // current path in the website (e.g: / or /todolist)
    const destination = useLocation().pathname;

    // state for active page - will highlight behind active page in navbar
    const [activePage, setActivePage] = useState(destinationToPage[destination]);

    // set new active page whenever component mounts
    useEffect(() => {
        setActivePage(destinationToPage[destination]);
    })

    return (
        <nav className="navbar">
            <ul>
                <NavbarItem 
                    isActive={activePage === "home"} 
                    itemName="Home" 
                    destination="/"
                />
                <NavbarItem 
                    isActive={activePage === "todo"} 
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
            <Link to={destination}>
                {itemName}
            </Link>
        </li>
    );
}

export default Navbar;