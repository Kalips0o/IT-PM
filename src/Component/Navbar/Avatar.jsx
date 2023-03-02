import {UserOutlined} from '@ant-design/icons';
import {Avatar, Space} from 'antd';
import React from "react";

export const UserAvatar = () => (
    <Space direction="vertical" size={90}>
        <Space wrap size={90}>
            <Avatar size={90} src={'https://cs14.pikabu.ru/post_img/2023/02/13/8/1676295806139337963.jpg'} icon={<UserOutlined/>} />
        </Space>

    </Space>
);

