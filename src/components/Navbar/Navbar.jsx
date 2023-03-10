import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/ITPMLogo.svg';
import Help from './Help';
import SearchBlock from './Search';

function Navbar() {
    return (
        <header className={styles.header}>
            <div>
                <img src={logo} alt="IT PM Logo" />
            </div>
            <div>
                <Help />
            </div>
            <div>
                <SearchBlock />
            </div>
        </header>
    );
}

export default Navbar;
