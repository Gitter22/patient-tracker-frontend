import { Card, Col, Divider, Row, Statistic, Table } from 'antd'
import React from 'react'
import Content from '../../../../components/Box'
import CardDescription from '../../../../components/CardDescription';
import {
    LikeOutlined
} from '@ant-design/icons';

import Slider from "react-slick";
import DateSliderCard from './DateSliderCard';


const columns = [
    {
        title: 'Exercise',
        dataIndex: 'title',
        key: 'title',
        render: (text) => text
    },
    {
        title: 'Sets',
        dataIndex: 'sets',
        key: 'sets',
    },
    {
        title: 'Reps/Count',
        dataIndex: 'reps',
        key: 'reps',
    },
    {
        title: 'Weight',
        dataIndex: 'weight',
        key: 'weight',
    },
    {
        title: 'Duration',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: 'Distance',
        dataIndex: 'distance',
        key: 'distance',
    },
    {
        title: 'Notes',
        dataIndex: 'notes',
        key: 'notes',
    },
];
const data = [
    {
        key: '1',
        title: 'Wall Sit',
        sets: 3,
        reps: 15,
        weight: 15,
        duration: 30,
        distance: 3.5,
        notes: 'Take 30 minutes break betwen sets'

    },
    {
        key: '2',
        title: 'Heel Raise',
        sets: 3,
        reps: 15,
        weight: 23,
        duration: 30,
        distance: 3.5,
        notes: 'Take 30 minutes break betwen sets'
    },
    {
        key: '3',
        title: 'Bridge on heels',
        sets: 3,
        reps: 12,
        weight: 15,
        duration: 19,
        distance: 5,
        notes: 'Take 30 minutes break betwen sets'
    },
    {
        key: '4',
        title: 'Clamshell',
        sets: 3,
        reps: 12,
        weight: 15,
        duration: 19,
        distance: 5,
        notes: 'Take 30 minutes break betwen sets'
    },
];

const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const DateSlider = () => {
    return (
        <Row gutter={[16, 16]}>
            <Col span={24}>
                <Slider {...settings}>
                    <DateSliderCard
                        date='2023-03-21'
                        key='1'
                    />
                    <DateSliderCard
                        date='2023-03-22'
                        key='2'
                    />
                    <DateSliderCard
                        date='2023-03-23'
                        key='3'
                    />
                    <DateSliderCard
                        date='2023-03-24'
                        key='4'
                    />
                    <DateSliderCard
                        date='2023-03-5'
                        key='5'
                    />
                    <DateSliderCard
                        date='2023-03-26'
                        key='6'
                    />
                    <DateSliderCard
                        date='2023-03-27'
                        key='7'
                    />
                    <DateSliderCard
                        date='2023-03-28'
                        key='8'
                    />
                    <DateSliderCard
                        date='2023-03-28'
                        key='9'
                    />
                    <DateSliderCard
                        date='2023-03-29'
                        key='10'
                    />
                    <DateSliderCard
                        date='2023-03-30'
                        key='11'
                    />
                </Slider>
            </Col>
        </Row>
    )
}
const TrackerTab = () => {
    return (
        <>
            <DateSlider />
            {/* <Content> */}
            <Row gutter={[16, 4]}>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="Water Intake"
                            value={6}
                            suffix="litres"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="Sleep"
                            value={8}
                            suffix="Hrs"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card bordered={true}>
                        <Statistic
                            title="Walk/Steps"
                            value={5520}
                        />
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card title="Diet" bordered={true}>
                        <Row gutter={[16, 16]}>
                            <Col span={12}>
                                <CardDescription
                                    title='Target'
                                    // icon={<FaceFrown />}
                                    description='2 boiled eggs, 40 g chana/upma, 1 glass whey, 2 glass milk'
                                />
                            </Col>
                            <Col span={12}>
                                <CardDescription
                                    title='Consumed'
                                    // icon={<FaceFrown />}
                                    description='2 boiled eggs, 40 g chana/upma, 1 glass whey, 2 glass milk'
                                />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card title="Exercises" bordered={true}>
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                    </Card>
                </Col>
            </Row>
            {/* </Content > */}
        </>
    )
}

export default TrackerTab