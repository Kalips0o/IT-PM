import {
    Row,
    Col,
    Divider,
    Space,
} from 'antd';
import CustomSwitch from '../../../reused/CustomSwitch';

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
                <div className={styles.infoRow}>
                    <Row justify="space-between" align="middle">
                        <Col>ID чата</Col>
                        <Col>284872364237</Col>
                    </Row>
                    <Divider />
                </div>
                <div className={styles.infoRow}>
                    <Row justify="space-between" align="middle">
                        <Col>Участники чата</Col>
                        <Col>462</Col>
                    </Row>
                    <Divider />
                </div>
                <div className={styles.infoRow}>
                    <Row justify="space-between" align="middle">
                        <Col>Подключить Chat GPT</Col>
                        <Col>
                            <CustomSwitch />
                        </Col>
                    </Row>
                    <Divider />
                </div>
                <div className={styles.infoRow}>
                    <Row justify="space-between" align="middle">
                        <Col span={12}>
                            Часовой пояс
                        </Col>
                        <Divider />
                    </Row>
                </div>
            </Space>
        </section>
    );
}
