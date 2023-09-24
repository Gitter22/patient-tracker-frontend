import React from 'react'
import Box from '../../../../components/Box'
import { Space, Table, } from 'antd';
import { Link } from 'react-router-dom';

const data = [
    {
        key: '1',
        title: 'General Fitness',
        planId: 560,
        categories: ['Fitness', 'Rehab',],
        status: 'Ongoing',
        mode: 'Online',
        via: 'Facetime',
        validity: '23 Sept, 2023 - 23 Dec, 2023',
        soldSessions: 11,
        paymentStatus: 'Pending',
        remarks: 'Focussed on back problems',
    },
    {
        key: '2',
        title: 'Injury treatment',
        planId: 283,
        categories: ['Rehab'],
        status: 'Completed',
        mode: 'Online',
        via: 'Whatsapp',
        validity: '23 Jan, 2023 - 23 Feb, 2023',
        soldSessions: 13,
        paymentStatus: 'Paid',
        remarks: 'Rehab from Fracture',
    },
    {
        key: '3',
        title: 'Injury treatment',
        planId: 281,
        categories: ['Rehab'],
        status: 'Completed',
        mode: 'Offline',
        via: '-',
        validity: '23 Dec, 2022 - 22 Jan, 2023',
        soldSessions: 13,
        paymentStatus: 'Paid',
        remarks: 'Rehab from fracture',
    },
];
const PlansTable = () => {
    const columns = [
        {
            title: 'Plan Id',
            key: 'planId',
            dataIndex: 'planId'
        },
        {
            title: 'Plan title',
            key: 'title',
            dataIndex: 'title'
        },
        {
            title: 'Categories',
            key: 'categories',
            dataIndex: 'categories',
            render: (categories) => categories.join(',')
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status'
        },
        {
            title: 'Mode',
            key: 'mode',
            dataIndex: 'mode'
        },
        {
            title: 'Via',
            key: 'via',
            dataIndex: 'via'
        },
        {
            title: 'Validity',
            key: 'validity',
            dataIndex: 'validity'
        },

        {
            title: 'Total Sessions',
            key: 'soldSessions',
            dataIndex: 'soldSessions'
        },
        {
            title: 'Payment Status',
            key: 'paymentStatus',
            dataIndex: 'paymentStatus'
        },
        {
            title: 'Remarks',
            key: 'remarks',
            dataIndex: 'remarks'
        },
    ];
    return (
        // <WhiteBox>Plans</WhiteBox>
        <Table columns={columns} dataSource={data} rowKey={'key'} />
    )
}

export default PlansTable