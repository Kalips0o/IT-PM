import React from 'react';
import UserAvatar from './UserInfo/UserAvatar.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import styles from './SideMenu.module.css';
import Chat from './Chat/Chat';
import DeskAccordion from './Desks/DeskAccordion';

function SideMenu() {
    return (
        <div className={styles.sideMenu}>
            <UserAvatar />
            <UserInfo />
            <Chat />
            <DeskAccordion />
        </div>
    );
}

export default SideMenu;
