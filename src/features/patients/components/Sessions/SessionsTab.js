import React from 'react'
import { Avatar, Button, Card, Col, Divider, List, Row, Space, Statistic, Table, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import Content from '../../../../components/Box';
import CardDescription from '../../../../components/CardDescription';
import FaceFrown from '../../../../svg/FaceFrown';
import Stethoscope from '../../../../svg/Stethoscope';


const { Title } = Typography

const { Meta } = Card

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
        title: 'Reps',
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
        title: 'Count',
        dataIndex: 'count',
        key: 'count',
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
        count: 0

    },
    {
        key: '2',
        title: 'Heel Raise',
        sets: 3,
        reps: 15,
        weight: 23,
        duration: 30,
        distance: 3.5,
        count: 0
    },
    {
        key: '3',
        title: 'Bridge on heels',
        sets: 3,
        reps: 12,
        weight: 15,
        duration: 19,
        distance: 5,
        count: 15
    },
    {
        key: '3',
        title: 'Clamshell',
        sets: 3,
        reps: 12,
        weight: 15,
        duration: 19,
        distance: 5,
        count: 15
    },
];

const scheduleHistoryColumns = [
    {
        title: 'Schedule Date',
        key: 'date',
        render: (record) => {
            const sessionDate = dayjs(record.startTime).format("DD MMM YY")
            const startTime = dayjs(record.startTime).format("HH:mm")
            const endTime = dayjs(record.endTime).format("HH:mm")
            return (<>
                <span>{sessionDate} </span>
                <Tag>{startTime} - {endTime}</Tag>
            </>
            )
        }
    },
    {
        title: 'Scheduled By',
        dataIndex: 'scheduledBy',
        key: 'scheduledBy',
    },
    {
        title: 'Reason for reschedule',
        dataIndex: 'reasonForReschedule',
        key: 'reasonForReschedule',
    },
];

const scheduleData = [
    {
        key: '1',
        startTime: '2023-03-22T19:30:00',
        endTime: '2023-03-22T20:30:00',
        scheduledBy: 'Patient',
        reasonForReschedule: 'Busy with Office Work',
    },
    {
        key: '2',
        startTime: '2023-03-21T19:30:00',
        endTime: '2023-03-21T20:30:00',
        scheduledBy: 'Doctor',
        reasonForReschedule: 'Hang out with Friends',
    },
    {
        key: '3',
        startTime: '2023-03-20T19:30:00',
        endTime: '2023-03-20T20:30:00',
        scheduledBy: 'Doctor',
        reasonForReschedule: 'Overlap with other appointments',
    },
    {
        key: '4',
        startTime: '2023-03-19T19:30:00',
        endTime: '2023-03-19T20:30:00',
        scheduledBy: 'Doctor',
        reasonForReschedule: 'Scheduled',
    },
];

const SessionList = () => {
    return (
        <ul style={{ listStyle: 'none', margin: "0px", padding: "0px" }}>
            <li style={{ marginBottom: "8px", padding: "0px" }}>
                <SessionItem
                    sessionSequenceId={6}
                    startTime={'2023-03-29T19:30:00'}
                    endTime={'2023-03-29T20:00:00'}
                    status='pending'
                />
            </li>
            <li style={{ marginBottom: "8px" }}>
                <SessionItem
                    sessionSequenceId={5}
                    startTime={'2023-03-27T19:30:00'}
                    endTime={'2023-03-27T20:15:00'}
                    status='pending'
                />
            </li>
            <li style={{ marginBottom: "8px" }}>
                <SessionItem
                    sessionSequenceId={4}
                    startTime={'2023-03-25T20:30:00'}
                    endTime={'2023-03-25T21:30:00'}
                    status='pending'
                />
            </li>
            <li style={{ marginBottom: "8px" }}>
                <SessionItem
                    sessionSequenceId={3}
                    startTime={'2023-03-23T19:30:00'}
                    endTime={'2023-03-23T20:00:00'}
                    status='ongoing'
                />
            </li>
            <li style={{ marginBottom: "8px" }}>
                <SessionItem
                    sessionSequenceId={2}
                    startTime={'2023-03-21T19:30:00'}
                    endTime={'2023-03-21T20:15:00'}
                    status='canceled'
                />
            </li>
            <li style={{ marginBottom: "8px" }}>
                <SessionItem
                    sessionSequenceId={1}
                    startTime={'2023-03-19T20:30:00'}
                    endTime={'2023-03-19T21:30:00'}
                    status='completed'
                />
            </li>
        </ul>
    )
}

const SessionItem = ({ sessionSequenceId, startTime, endTime, status }) => {
    const statusColor = (status) => {
        switch (status) {
            case 'pending': {
                return '#1677ff'
            }
            case 'completed': {
                return '#52c41a'
            }
            case 'ongoing': {
                return '#faad14'
            }
            case 'canceled': {
                return '#f5222d'
            }
            default: {
                return '#1677ff'
            }
        }
    }
    return (
        // <div style={{ border: "1px solid gray", display: 'flex', }}>
        //     <div style={{ backgroundColor: statusColor(status), width: "50px" }}>
        //         {sessionSequenceId}
        //     </div>
        //     <div>
        //         <h3 style={{ margin: "8px" }}>{dayjs(startTime).format("DD MMM YYYY")}</h3>
        //         <span>{`${dayjs(startTime).format("HH:mm")} - ${dayjs(endTime).format("HH:mm")}`}</span>
        //     </div>
        // </div>

        <Row gutter={16} >
            <Col span={24}>
                <Card>
                    <Meta
                        style={{
                            padding: 0,
                            margin: 0
                        }}
                        avatar={<Avatar
                            shape="square"
                            size={64}
                            style={{
                                backgroundColor: statusColor(status),
                                color: '#fff',
                            }}
                            gap={1}
                        >
                            {sessionSequenceId}
                        </Avatar>}
                        title={dayjs(startTime).format("DD MMM YYYY")}
                        description={`${dayjs(startTime).format("HH:mm")} - ${dayjs(endTime).format("HH:mm")}`}
                    />
                </Card>
            </Col>
        </Row>
    )
}

const SessionDetail = () => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <Card>
                        <Meta
                            avatar={<Avatar
                                shape="square"
                                size={64}
                                style={{
                                    backgroundColor: '#fde3cf',
                                    color: '#f56a00',
                                }}
                            >
                                {3}
                            </Avatar>}
                            title={'23 March 2023'}
                            description={`07:30pm - 09:30pm`}
                        />
                    </Card>
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={6}>
                    <CardDescription
                        title='Status'
                        // icon={<FaceFrown />}
                        description='Completed'
                    />
                </Col>

                <Col span={6}>
                    <CardDescription
                        title='Type'
                        // icon={<FaceFrown />}
                        description='Regular'
                    />
                </Col>
                <Col span={6}>
                    <CardDescription
                        title='Mode'
                        // icon={<FaceFrown />}
                        description='Online'
                    />
                </Col>
                <Col span={6}>
                    <CardDescription
                        title='Conducted By'
                        // icon={<FaceFrown />}
                        description='Dr. Zuber Shaikh'
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <CardDescription
                        title='Complaints'
                        icon={<FaceFrown />}
                        description='Extreme pain in lower back, difficulty in getting standing back'
                    />
                </Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <CardDescription
                        title='Assessment'
                        icon={<Stethoscope />}
                        description=' Weak muscles, inactivity, weak core. Need strength training for atleast 6 months'
                    />
                </Col>
            </Row>
            {/* <Row gutter={[16, 16]}>
                <Col span={12}>
                    <CardDescription
                        title='Reason for Cancellation'
                        icon={<FaceFrown />}
                        description='Busy with personal work'
                    />
                </Col>
            </Row> */}
            <Row>
                <Col span={24}>
                    {/* <Divider>Exercises</Divider> */}
                    < Card title='Exercise' >
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                    </Card >
                </Col>
            </Row >
            <Row>
                <Col span={24}>
                    {/* <Divider>Schedule History</Divider> */}
                    < Card title='Schedule History' >
                        <Table
                            columns={scheduleHistoryColumns}
                            dataSource={scheduleData}
                            pagination={true}
                        />
                    </Card >
                </Col>
            </Row >
        </>
    )
}

const SessionsTab = () => {
    return (
        <Content >
            <Row>
                <Col xl={6}>
                    <SessionList />
                </Col>
                <Col xl={18}>
                    <SessionDetail />
                </Col>
            </Row >
        </Content>
    )
}

export default SessionsTab
