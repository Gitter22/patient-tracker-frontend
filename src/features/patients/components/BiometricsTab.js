import React from 'react'
import { Card, Col, Descriptions, Row, Timeline } from 'antd';
const BiometricsTab = () => {
    return (
        <>
            <Row gutter={[16, 24]}>
                <Col span={16}>
                    <Card title="Biometrics" bordered={true}>
                        Card content
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 24]}>
                <Col span={16}>
                    <Card title="Weight" bordered={true}>
                        Card content
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 24]}>
                <Col span={16}>
                    <Card title="Waist" bordered={true}>
                        Card content
                    </Card>
                </Col>
            </Row >
        </>
    )
}

export default BiometricsTab
