import React from 'react'
import { Col, Divider, Row, Space, Tag, Typography } from 'antd'
import UserInjured from '../../../../svg/UserInjured'
import Meal from '../../../../svg/Meal'
import HandHoldingMedical from '../../../../svg/HandHoldingMedical'
import BriefCase from '../../../../svg/BriefCase'
import ThumbsUp from '../../../../svg/ThumbsUp'
import ThumbsDown from '../../../../svg/ThumbsDown'
import Notes from '../../../../svg/Notes'
import CardDescription from '../../../../components/CardDescription'
import Card from '../../../../components/Card'
import FaceFrown from '../../../../svg/FaceFrown'
import Stethoscope from '../../../../svg/Stethoscope'


const { Text, Link, Title } = Typography



const LifestyleInfo = () => {
    return (
        <Card>
            <Title level={4}>Lifestyle Info And Assessment</Title>
            <Row>
                <Col xl={8}>
                    <CardDescription
                        title='Work Type'
                        icon={<BriefCase />}
                        description='Desk Job'
                    />
                </Col>
                <Col xl={8}>
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
                </Col>
                <Col xl={8}>
                    <CardDescription
                        title='Injuries'
                        icon={<UserInjured />}
                        description='Fracture, 6 months ago'
                    />
                </Col>
                <Col xl={8}>
                    <CardDescription
                        title='Diet'
                        icon={<Meal />}
                        description='Veg'
                    />
                </Col>
                <Col xl={8}>
                    <CardDescription
                        title='Likes'
                        icon={<ThumbsUp />}
                        description='Cheese, Burger, Fresh Fruits'
                    />
                </Col>
                <Col xl={8}>
                    <CardDescription
                        title='Dislikes'
                        icon={<ThumbsDown />}
                        description='Milk, Meat'
                    />
                </Col>
                <Col xl={24}>
                    <CardDescription
                        title='Complaints'
                        icon={<FaceFrown />}
                        description='Extreme pain in lower back, difficulty in getting standing back'
                    />
                </Col>
            </Row >
            <Divider />
            <Row>

                <Col xl={24}>
                    <CardDescription
                        title='Assessment'
                        icon={<Stethoscope />}
                        description=' Weak muscles, inactivity, weak core. Need strength training for atleast 6 months'
                    />
                </Col>
                <Col xl={24}>
                    <CardDescription
                        title='Notes'
                        icon={<Notes />}
                        description='Does breeze walking occassionally'
                    />
                </Col>
            </Row>
        </Card >
    )
}

export default LifestyleInfo