

import React from "react"
import "../style.css"
import react_logo from "../images/react_logo.png"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={react_logo} alt="React Logo" className="nav-logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}