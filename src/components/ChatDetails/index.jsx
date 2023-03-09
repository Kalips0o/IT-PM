import { } from 'antd';
import Head from './Head';
import Main from './Main';
import styles from './index.module.scss';

export default function ChatDetails() {
    return (
        <div className={styles.chatDetails}>
            <Head />
            <Main />
        </div>
    );
}
