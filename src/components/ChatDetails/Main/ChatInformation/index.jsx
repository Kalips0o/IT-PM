import { Row, Col, Space } from 'antd';
import InfoRow from './InfoRow';

import styles from './ChatInformation.module.scss';

export default function ChatInformation() {
    return (
        <section className={styles.box}>
            <Space
                direction="vertical"
                size={8}
                style={{
                    display: 'flex',
                }}
            >
                {['ID чата', 'Участники чата', 'Подключить Chat GPT']
                    .map((name) => <InfoRow name={name} value={123456789} key={name} />)}
                <Row>
                    <Col span={24}>
                        other
                    </Col>
                </Row>
            </Space>
        </section>
    );
}
