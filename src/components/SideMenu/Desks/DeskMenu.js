import { Menu } from 'antd';
import {
    ChartPieIcon,
    ChatsCircleIcon,
    NotionIcon,
    PuzzlePieceIcon,
    StickerIcon,
    UserIcon,
} from '../../Icons';
import styles from './DeskMenu.module.css';

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Статистика', 'sub1', <ChartPieIcon />, [
        getItem('Option 1', '1'),
        getItem('Option 2', '2'),
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
    ]),
    getItem('Сообщения', 'sub2', <ChatsCircleIcon />, [
        getItem('Отправка сообщений ', '5'),
        getItem('Удаление сообщений ', '6'),
        getItem('Блокировка участника', '7'),
        getItem('Триггер', '8'),

    ]),
    getItem('Инструкция', '9', <StickerIcon />),
    getItem('FAQ', '10', <PuzzlePieceIcon />),
    getItem('Список экспертов', '11', <UserIcon />),
    getItem('Notion', '12', <NotionIcon />),
];

function DeskMenu() {
    return (
        <div>
            <Menu
                className={styles.buttonDesk}
                defaultSelectedKeys={['']}
                defaultOpenKeys={['']}
                mode="inline"
                theme="light"
                items={items}
            />
        </div>
    );
}

export default DeskMenu;
