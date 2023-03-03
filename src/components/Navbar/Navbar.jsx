import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/ITPMLogo.svg';

function Navbar() {
    return (
        <header className={styles.header}>
            <div>
                <img src={logo} alt="IT PM Logo" />
            </div>
        </header>
    );
}

export default Navbar;
