import React from "react";
import { Link } from "react-router-dom";
import "../style/Nav.css";

const Nav = () => {
    return (
        <nav className="topnav">
            <h3>Daily Briefing</h3>
            <ul>
                <Link to="/">
                    <li>Profile</li>
                </Link>

                <Link to="/briefing">
                    <li>Briefing</li>
                </Link>

            </ul>
        </nav>
    );
};

export default Nav;