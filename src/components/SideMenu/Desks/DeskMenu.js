import { Menu } from 'antd';
import styles from './DeskMenu.module.css';
import {
    ChartPieIcon,
    ChatCircleIcon, ChatsCircleIcon,
    NotionIcon,
    PuzzlePieceIcon,
    StickerIcon,
    UserIcon,
} from '../../Icons';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Чаты', '14', <ChatsCircleIcon />),
    getItem('Статистика', 'sub1', <ChartPieIcon />, [
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),

    ]),
    getItem('Сообщения', 'sub2', <ChatCircleIcon />, [
        getItem('Отправка сообщений', '7'),
        getItem('Удаление ообщений', '8'),
        getItem('Блокировка участника', '9'),
        getItem('Триггер', '10'),
    ]),
    getItem('Инструкция', '11', <StickerIcon />),
    getItem('FAQ', '12', <PuzzlePieceIcon />),
    getItem('Список экспертов', '13', <UserIcon />),
    getItem('Notion', '14', <NotionIcon />),

];

function DeskMenu() {
    return (
        <Menu
            className={styles.buttonDesk}
            defaultSelectedKeys={['']}
            defaultOpenKeys={['']}
            items={items}
        />
    );
}

export default DeskMenu;
