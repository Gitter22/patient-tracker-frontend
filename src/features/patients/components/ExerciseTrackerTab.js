import { Card, Col, Row } from 'antd'
import React from 'react'

const ExerciseTrackerTab = () => {
    return (
        <Row gutter={[16, 24]}>
            <Col span={16}>
                <Card title="Walk" bordered={true}>
                    Card content
                </Card>
            </Col>
            <Col span={16}>
                <Card title="Side Lats" bordered={true}>
                    Card content
                </Card>
            </Col>
            <Col span={16}>
                <Card title="Push ups" bordered={true}>
                    Card content
                </Card>
            </Col>
            <Col span={16}>
                <Card title="Planks" bordered={true}>
                    Card content
                </Card>
            </Col>
        </Row>
    )
}

export default ExerciseTrackerTab