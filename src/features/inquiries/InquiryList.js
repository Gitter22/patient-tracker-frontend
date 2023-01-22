import React from 'react'
import { Button, Space, Table, Tag, Typography } from 'antd';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

const columns = [
    {
        title: 'Patient info',
        key: 'patient-info',
        render: (row) => <div>
            <div>
                <span>{row.name}</span>
            </div>
            <div>
                <Space>
                    <span>{row.age}y,</span>
                    <span>{row.gender}</span>
                </Space>
            </div>
        </div>
    },
    {
        title: 'Location',
        key: 'location',
        render: (row) => <span>{row.city}, {row.country}</span>
    },
    {
        title: 'Sessions',
        key: 'sessions',
        render: (row) => <span>{row.completedSessions} / {row.totalSessions}</span>
    },
    {
        title: 'Last Session',
        key: 'lastSessionAt',
        render: (row) => <span>{row.lastSessionAt}</span>

    },
    {
        title: 'Next Session',
        key: 'nextSessionAt',
        render: (row) => <span>{row.nextSessionAt}</span>


    },
    {
        title: 'Contact',
        key: 'phone',
        render: (row) => <span>{row.phone}</span>
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <Link>View</Link>
                <Link>Call</Link>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'Aadil Shaikh',
        age: 32,
        gender: 'M',
        city: 'Vadodara',
        country: 'India',
        completedSessions: 5,
        totalSessions: 13,
        lastSessionAt: '23 May, 2022',
        nextSessionAt: '12 Jan, 2023',
        phone: '9426112175'
    },
    {
        key: '2',
        name: 'Aiyyo Shradda',
        age: 29,
        gender: 'F',
        city: 'Bangalore',
        country: 'India',
        completedSessions: 9,
        totalSessions: 13,
        lastSessionAt: '07 Jan, 2023',
        nextSessionAt: '09 Jan, 2023',
        phone: '8514263547'
    },
    {
        key: '3',
        name: 'John Doe',
        age: 42,
        gender: 'M',
        city: 'New York',
        country: 'USA',
        completedSessions: 0,
        totalSessions: 13,
        lastSessionAt: '11th Feb, 2023',
        nextSessionAt: '13 Feb, 2023',
        phone: '9764318250'
    },
];


const InquiryList = () => {
    return (
        <>
            <PageHeader
                title='Inquiries'
                extra={<>
                    <Button type="primary">Cancel</Button>
                    <Button>Save</Button>
                </>}
            />
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default InquiryList