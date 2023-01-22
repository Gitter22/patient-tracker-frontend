import React from 'react'
import { Card, Divider, Space, Tag, Typography } from 'antd'
import ReactSpeedometer from "react-d3-speedometer"
import UserInjured from '../../../svg/UserInjured'
import Meal from '../../../svg/Meal'
import HandHoldingMedical from '../../../svg/HandHoldingMedical'
import BriefCase from '../../../svg/BriefCase'
import ThumbsUp from '../../../svg/ThumbsUp'
import ThumbsDown from '../../../svg/ThumbsDown'
import Notes from '../../../svg/Notes'
import CardDescription from '../../../components/CardDescription'




const LifestyleInfo = () => {
    return (
        <Card >
            {/* <Title level={3} style={{ marginBottom: 5, marginLeft: 10 }}>LifeStyle and Health </Title> */}
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '50%' }}>
                    <CardDescription
                        title='Work Type'
                        icon={<BriefCase />}
                        description='Desk Job'
                    />
                    <CardDescription
                        title='Medical Condition'
                        icon={<HandHoldingMedical />}
                    >
                        <Space>
                            <Tag color="warning">Diabetes</Tag>
                            <Tag color="warning">Blood Pressure</Tag>
                            <Tag color="warning">Bypass</Tag>
                        </Space>
                    </CardDescription>

                    <CardDescription
                        title='Injuries'
                        icon={<UserInjured />}
                        description='Fracture, 6 months ago'
                    />
                </div>
                <div style={{ flex: '50%' }}>
                    <CardDescription
                        title='Diet'
                        icon={<Meal />}
                        description='Veg'
                    />
                    <CardDescription
                        title='Likes'
                        icon={<ThumbsUp />}
                        description='Cheese, Burger, Fresh Fruits'
                    />
                    <CardDescription
                        title='Dislikes'
                        icon={<ThumbsDown />}
                        description='Milk, Meat'
                    />
                </div>
            </div>
            <Divider />
            <div style={{ display: 'flex' }}>
                <CardDescription
                    title='Notes'
                    icon={<Notes />}
                    description='Does breeze walking occassionally'
                />
            </div>
        </Card >
    )
}

export default LifestyleInfo