import React from 'react';
import { Avatar, Space } from 'antd';

function UserAvatar() {
    return (
        <Space direction="vertical" size={90}>
            <Space wrap size={90}>
                <Avatar size={90} src="https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg" />
            </Space>
        </Space>
    );
}

export default UserAvatar;
