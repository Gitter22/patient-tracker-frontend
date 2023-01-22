import { Card, Space, Statistic, Tag, Typography } from 'antd'
import React from 'react'

const { Text, Link, Title } = Typography


const PlanAndSessionInfo = () => {
    return (
        <Card>
            <Title level={4} style={{ marginBottom: 0 }}>General Fitness</Title>
            <Space>
                <Tag>23 Feb '23 - 23 March '23</Tag>
                <Tag>Online</Tag>
                <Tag>Fitness</Tag>
            </Space>
            <div style={{ display: 'grid', gridTemplateColumns: "auto auto auto auto auto" }}>

                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title level={4}>13</Title>
                    <Text type='secondary'>Total</Text>
                </div>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title level={4}>5</Title>
                    <Text type='secondary'>Completed</Text>
                </div>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title level={4}>3</Title>
                    <Text type='secondary'>Cancelled</Text>
                </div>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title level={4}>2</Title>
                    <Text type='secondary'>Rescheduled By Patient</Text>
                </div>
                <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title level={4}>0</Title>
                    <Text type='secondary'>Rescheduled By doctor</Text>
                </div>

            </div>
        </Card >
    )
}

export default PlanAndSessionInfo