import { Row, Col } from 'antd';
import ChatInformation from './ChatInformation';
import Stats from './Stats.jsx';

import styles from './index.module.scss';

export default function Main() {
    return (
        <div className={styles.main}>
            <Row gutter={54}>
                <Col>
                    <ChatInformation />
                </Col>
                <Col>
                    <Stats />
                </Col>
            </Row>
        </div>
    );
}
