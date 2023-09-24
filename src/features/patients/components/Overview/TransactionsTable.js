import React from 'react'
import Box from '../../../../components/Box'
import { Space, Table, } from 'antd';
import { Link } from 'react-router-dom';

const data = [
    {
        key: '1',
        planId: 135,
        amount: 560,
        type: 'Credit',
        mode: 'Gpay',
        transactionId: 'asd1234adasdQsaff',
        remarks: 'full payment'
    },
    {
        key: '2',
        planId: 280,
        amount: 150,
        type: 'Debit',
        mode: 'Paypal',
        transactionId: 'asd1234adasdQsaff',
        remarks: 'Refund due to cancelled sessions'
    },
    {
        key: '3',
        planId: 190,
        amount: 560,
        type: 'Credit',
        mode: 'Cash',
        transactionId: null,
        remarks: 'Advance payment'
    },
];
const TransactionsTable = () => {
    const columns = [
        {
            title: 'Plan Id',
            key: 'planId',
            dataIndex: 'planId'
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount'
        },

        {
            title: 'Type',
            key: 'type',
            dataIndex: 'type'
        },
        {
            title: 'Mode',
            key: 'mode',
            dataIndex: 'mode'
        },
        {
            title: 'Transaction Id',
            key: 'transactionId',
            dataIndex: 'transactionId'
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

export default TransactionsTable