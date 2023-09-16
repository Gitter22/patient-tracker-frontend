import { Card, Space, Statistic, Tag, Typography } from 'antd'
import React from 'react'
import CardDescription from '../../../components/CardDescription'

const { Text, Link, Title } = Typography


const TreatmentStatus = () => {
    return (
        <Card title='Treatment Status'>

            <div style={{ display: 'flex' }}>
                <div style={{ flex: '50%' }}>
                    <CardDescription
                        title='Plan'
                        // icon={<VenusMars />}
                        description='General Fitness'
                    />
                    <CardDescription
                        title='Period'
                        // icon={<LocationDrop />}
                        description="23 Feb '23 - 23 March '23"
                    />
                </div>
                <div style={{ flex: '50%' }}>
                    <CardDescription
                        title='Mode'
                        // icon={<Phone />}
                        description='Online'
                    />
                </div>
            </div>
            <div style={{ flex: '50%' }}>
                <CardDescription
                    title='Sessions Summary'
                    // icon={<Phone />}
                    description=''
                />
            </div>
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
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '50%' }}>
                    <CardDescription
                        title='Last Session On'
                        // icon={<VenusMars />}
                        description="23 Feb '23"
                    />
                </div>
                <div style={{ flex: '50%' }}>
                    <CardDescription
                        title='Next Session on'
                        // icon={<Phone />}
                        description="23 March '23"
                    />
                </div>
            </div>
        </Card >
    )
}

export default TreatmentStatus