import { Row, Col } from 'antd';

export default function InfoRow(props) {
    const { name, value } = props;

    return (
        <Row>
            <Col span={24}>
                <Row justify="space-between">
                    <Col>{name}</Col>
                    <Col>{value}</Col>
                </Row>
            </Col>
        </Row>
    );
}
