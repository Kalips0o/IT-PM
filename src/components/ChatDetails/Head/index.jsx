import { Typography, Divider } from 'antd';
import UserAvatar from '../../reused/UserAvatar';

import styles from './Head.module.scss';

export default function Head() {
    return (
        <div className={styles.head}>
            <div className={styles.heading}>
                <Typography.Title level={1}>
                    Подробная информация о чате
                </Typography.Title>
                <Divider />
            </div>
            <div className={styles.chatname}>
                <Typography.Text>Имя чата</Typography.Text>
                <UserAvatar size={62} />
            </div>
        </div>
    );
}
