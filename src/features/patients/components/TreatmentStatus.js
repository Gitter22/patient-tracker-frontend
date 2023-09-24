import { Col, Divider, Row, Space, Statistic, Tag, Typography } from 'antd'
import React from 'react'
import CardDescription from '../../../components/CardDescription'
import Card from '../../../components/Card'


const { Text, Link, Title } = Typography


const TreatmentStatus = () => {
    return (
        <Card>
            <Title level={4}>Current Plan</Title>
            <Row>
                <Col xl={6}>
                    <CardDescription
                        title='Plan'
                        description='General Fitness'
                    />
                </Col>
                <Col xl={6}>
                    <CardDescription
                        title='Validity'
                        description="23 Feb '23 - 23 March '23"
                    />
                </Col>
                <Col xl={6}>
                    <CardDescription
                        title='Mode'
                        description='Online'
                    />
                </Col>
                <Col xl={6}>
                    <CardDescription
                        title='Via'
                        description='Facetime'
                    />
                </Col>
                <Col xl={6}>
                    <CardDescription
                        title='Last Session On'
                        description="23 Feb '23"
                    />
                </Col>
                <Col xl={6}>
                    <CardDescription
                        title='Next Session on'
                        description="23 March '23"
                    />
                </Col>
            </Row>
            <Divider orientation='left'>Sessions Summary</Divider>
            <Row>
                <Col xl={4}>
                    <CardDescription
                        title='Total'
                    >
                        <Typography.Text strong style={{ fontSize: 20 }}>5</Typography.Text>
                    </CardDescription>
                </Col>
                <Col xl={4}>
                    <CardDescription
                        title='Conducted'
                    >
                        <Typography.Text strong style={{ fontSize: 20 }}>3</Typography.Text>
                    </CardDescription>
                </Col>
                <Col xl={4}>
                    <CardDescription
                        title='Cancelled'
                    >
                        <Typography.Text strong style={{ fontSize: 20 }}>2</Typography.Text>
                    </CardDescription>
                </Col>
                <Col xl={4}>
                    <CardDescription
                        title='Pending'
                    >
                        <Typography.Text strong style={{ fontSize: 20 }}>1</Typography.Text>
                    </CardDescription>
                </Col>
                <Col xl={4}>
                    <CardDescription
                        title='Bonus'
                    >
                        <Typography.Text strong style={{ fontSize: 20 }}>1</Typography.Text>
                    </CardDescription>
                </Col>
            </Row>
        </Card >
    )
}

export default TreatmentStatus