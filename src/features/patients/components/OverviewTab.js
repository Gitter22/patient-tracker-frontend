import { Card, Col, Divider, Row, Space, Tag, Typography } from 'antd'
import React from 'react'
import LifestyleInfo from './LifestyleInfo'
import MiniCalender from './MiniCalender'
import PatientInfo from './PatientInfo'
import TreatmentStatus from './TreatmentStatus'


const OverviewTab = () => {
    return (
        <>
            <Row gutter={[16, 24]}>
                <Col span={12}>
                    <PatientInfo />
                </Col>
                <Col span={12}>
                    <LifestyleInfo />
                </Col>
            </Row>
            <Row gutter={[16, 24]}>
                <Col span={12}>
                    <TreatmentStatus />
                </Col>
                <Col span={12}>
                    <MiniCalender />
                </Col>

            </Row>
            <Row gutter={[16, 24]}>
                <Col span={8}>
                    <Card title="Treatment Plans" bordered={true}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Payment Summary" bordered={true}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default OverviewTab

