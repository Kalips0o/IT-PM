import React from 'react';
import UserAvatar from './UserInfo/UserAvatar.jsx';
import UserInfo from './UserInfo/UserInfo.jsx';
import styles from './SideMenu.module.css';
import Chat from './Chat/Chat';
import DeskMenu from './Desks/DeskMenu';
import { TableIcon } from '../Icons';

function SideMenu() {
    return (
        <div className={styles.sideMenu}>
            <UserAvatar />
            <UserInfo />
            <Chat />
            <div>
                <TableIcon />
            </div>
            <DeskMenu />
        </div>
    );
}

export default SideMenu;
