import React from 'react';
import UserAvatar from './UserInfo/UserAvatar.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import styles from './SideMenu.module.css';
import Chat from './Chat/Chat';
import DeskMenu from './Desks/DeskMenu';

function SideMenu() {
    return (
        <div className={styles.sideMenu}>
            <UserAvatar />
            <UserInfo />
            <div>
                <Chat />
            </div>
            <div>
                <DeskMenu />
            </div>
        </div>
    );
}

export default SideMenu;
