import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navigation.css";

export function Navigation() {
    return (
        <nav role="navigation">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}