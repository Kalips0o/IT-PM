import React from 'react';
import UserAvatar from './UserAvatar';
import UserInfo from './UserInfo';

function SideMenu() {
    return (
        <div className="block">
            <UserAvatar />
            <UserInfo />
            <div>Chat</div>
        </div>
    );
}

export default SideMenu;
