import { CommentOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import styles from './Chat.module.css';

function Chat() {
    return (
        <Space direction="vertical">
            <Space className={styles.buttonChat}>
                <Button icon={<CommentOutlined width={21} />}>
                    Чаты
                </Button>

            </Space>
        </Space>
    );
}

export default Chat;
