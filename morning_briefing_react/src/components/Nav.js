import React from "react";
import { Link, Redirect } from "react-router-dom";
import "../style/Nav.css";

const Nav = (props) => {
    const {loginBol, logout} = props;
    // console.log(loginBol)
    return (
        <nav className="topnav">
            <h3>Daily Briefing</h3>
            <ul>
                <Link to="/">
                    <li>Profile</li>
                </Link>
                {loginBol ? <Link to="/briefing">
                    <div onClick={logout}>
                        <li>Log Out</li>
                    </div>
                </Link>:<li></li> }
                {!loginBol ? <Redirect to="/" /> : <p></p>}

            </ul>
        </nav>
    );
};

export default Nav;