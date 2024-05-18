import React from 'react';

import { Link } from 'react-router-dom';

/**
 * Renders the navigation bar component.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Game</Link></li>
                <li><Link to="/deck">Deck</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
