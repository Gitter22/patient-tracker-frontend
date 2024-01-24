import React from 'react'
import { Avatar, Button, Col, Divider, List, Row, Select, Space, Statistic, Table, Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import Content from '../../../../components/Box';
import CardDescription from '../../../../components/CardDescription';
import FaceFrown from '../../../../svg/FaceFrown';
import Stethoscope from '../../../../svg/Stethoscope';
import Card from '../../../../components/Card';
import Box from '../../../../components/Box';


const { Title } = Typography



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

const scheduleHistoryColumns = [
    {
        title: 'Schedule Date',
        key: 'date',
        width: 200,
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
        width: 150,
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

const sessionList = [
    {
        sessionSequenceId: 12,
        startTime: '2023-03-29T19:30:00',
        endTime: '2023-03-29T20:00:00',
        status: 'pending',
    },
    {

        sessionSequenceId: 11,
        startTime: '2023-03-27T19:30:00',
        endTime: '2023-03-27T20:15:00',
        status: 'pending',
    },
    {

        sessionSequenceId: 10,
        startTime: '2023-03-25T20:30:00',
        endTime: '2023-03-25T21:30:00',
        status: 'pending',
    },
    {

        sessionSequenceId: 9,
        startTime: '2023-03-23T19:30:00',
        endTime: '2023-03-23T20:00:00',
        status: 'ongoing',
    },
    {

        sessionSequenceId: 8,
        startTime: '2023-03-21T19:30:00',
        endTime: '2023-03-21T20:15:00',
        status: 'canceled',
    },
    {
        sessionSequenceId: 7,
        startTime: '2023-03-19T20:30:00',
        endTime: '2023-03-19T21:30:00',
        status: 'completed',
    },
    {
        sessionSequenceId: 6,
        startTime: '2023-03-29T19:30:00',
        endTime: '2023-03-29T20:00:00',
        status: 'pending',
    },
    {

        sessionSequenceId: 5,
        startTime: '2023-03-27T19:30:00',
        endTime: '2023-03-27T20:15:00',
        status: 'pending',
    },
    {

        sessionSequenceId: 4,
        startTime: '2023-03-25T20:30:00',
        endTime: '2023-03-25T21:30:00',
        status: 'pending',
    },
    {

        sessionSequenceId: 3,
        startTime: '2023-03-23T19:30:00',
        endTime: '2023-03-23T20:00:00',
        status: 'ongoing',
    },
    {

        sessionSequenceId: 2,
        startTime: '2023-03-21T19:30:00',
        endTime: '2023-03-21T20:15:00',
        status: 'canceled',
    },
    {
        sessionSequenceId: 1,
        startTime: '2023-03-19T20:30:00',
        endTime: '2023-03-19T21:30:00',
        status: 'completed',
    },]

const SessionList = () => {
    return (
        <Box.WhiteBox style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', height: 'calc(100vh - 222px)', overflowY: 'auto' }}>
            <ul style={{ listStyle: 'none', margin: "0px", padding: "0px" }}>
                {sessionList.map((session, index) => <li style={{ cursor: 'pointer' }} key={index}>
                    <SessionItem
                        sessionSequenceId={session.sessionSequenceId}
                        startTime={session.startTime}
                        endTime={session.endTime}
                        status={session.status}
                    />
                </li>)}
            </ul>
        </Box.WhiteBox >
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
        <Box style={{ display: 'flex', padding: '9px 15px', }}>
            <div>
                <Avatar
                    shape="square"
                    size={48}
                    style={{
                        backgroundColor: statusColor(status),
                        fontWeight: 400,
                        fontSize: 24,
                        marginRight: 9
                    }}
                    gap={0}
                >
                    {sessionSequenceId}
                </Avatar>
            </div>
            <div>
                <Typography.Title level={5} style={{ margin: '0px 0px' }}>{dayjs(startTime).format("DD MMM YYYY")}</Typography.Title>
                <Typography.Text level={5} type='secondary' style={{ margin: '0px 0px' }}>{`${dayjs(startTime).format("HH:mm")} - ${dayjs(endTime).format("HH:mm")}`}</Typography.Text>
            </div>
        </Box >
    )
}

const SessionDetail = () => {
    return (
        <>
            <Card style={{ height: 'calc(100vh - 222px)', overflowY: 'auto' }}>
                <Row gutter={[16, 16]}>
                    <Box style={{ display: 'flex', }}>
                        <div>
                            <Avatar
                                shape="square"
                                size={64}
                                style={{
                                    backgroundColor: '#1677ff',
                                    fontWeight: 400,
                                    fontSize: 24,
                                    marginRight: 9
                                }}
                                gap={0}
                            >
                                {3}
                            </Avatar>
                        </div>
                        <div>
                            <Typography.Title level={3} style={{ margin: '0px 0px' }}>23 March 2023</Typography.Title>
                            <Typography.Title level={5} type='secondary' style={{ margin: '0px 0px' }}>07:30pm - 09:30pm</Typography.Title>
                        </div>
                    </Box >
                    <Divider style={{ margin: 0 }} />
                </Row>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <CardDescription
                            title='Status'
                            description='Completed'
                        />
                    </Col>

                    <Col span={6}>
                        <CardDescription
                            title='Type'
                            description='Regular'
                        />
                    </Col>
                    <Col span={6}>
                        <CardDescription
                            title='Mode'
                            description='Online'
                        />
                    </Col>
                    <Col span={6}>
                        <CardDescription
                            title='Conducted By'
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
                <Row gutter={[0, 16]}>
                    <Col span={24}>
                        {/* <Divider orientation='left'>Exercises</Divider> */}
                        <Divider />

                        {/* <Title level={5}>Exercises</Title> */}
                        <Table
                            columns={columns}
                            dataSource={data}
                            pagination={false}
                        />
                    </Col>
                    <Divider />
                </Row>
                <Row>
                    <Col span={24}>
                        <Title level={5}>Schedule History</Title>
                        <Table
                            columns={scheduleHistoryColumns}
                            dataSource={scheduleData}
                            pagination={true}
                        />
                    </Col>
                </Row >
            </Card>
        </>
    )
}

const SessionsTab = () => {
    return (
        <Content >
            <Row gutter={[8]}>
                <Col xl={4}>
                    <SessionList />
                </Col>
                <Col xl={20}>
                    <SessionDetail />
                </Col>
            </Row >
        </Content>
    )
}

export default SessionsTab
