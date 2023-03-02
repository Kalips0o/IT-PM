import React from 'react';
import logo from '../../assets/icons/Logo.svg';

function Navbar() {
    return (
        <header
            className="header"
        >
            <div>
                <img src={logo} alt="IT PM Logo" />
            </div>
        </header>
    );
}

export default Navbar;
