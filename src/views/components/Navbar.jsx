import "./navbar.scss";

import React from "react";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component{
    render() {
        return (
            <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/contact">Contact</Link>
            </div>    
        );
    }
}