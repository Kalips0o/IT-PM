import React from 'react';
import UserAvatar from './UserAvatar.jsx';
import UserInfo from './UserInfo.jsx';

import styles from './SideMenu.module.css';

function SideMenu() {
    return (
        <div className={styles.sideMenu}>
            <UserAvatar />
            <UserInfo />
            <div>Chat</div>
        </div>
    );
}

export default SideMenu;
