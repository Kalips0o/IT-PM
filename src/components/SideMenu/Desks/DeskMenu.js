import { CalendarOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import ArrowUpRightIcon from '../../Icons/icons24/ArrowUpRight';
import ChatCenteredIcon from '../../Icons/icons24/ChatCentered';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Статистика', 'sub1', <ArrowUpRightIcon />, [
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),

    ]),
    getItem('Сообщения', 'sub2', <ChatCenteredIcon />, [
        getItem('Отправка сообщений', '7'),
        getItem('Удаление ообщений', '8'),
        getItem('Блокировка участника', '9'),
        getItem('Триггер', '10'),
    ]),
    getItem('Инструкция', '11', <MailOutlined />),
    getItem('FAQ', '12', <CalendarOutlined />),
    getItem('Список экспертов', '13', <CalendarOutlined />),
    getItem('Notion', '14', <CalendarOutlined />),
];

function DeskMenu() {
    return (
        <Menu
            style={{
                width: 256,
            }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={items}
        />
    );
}
export default DeskMenu;
