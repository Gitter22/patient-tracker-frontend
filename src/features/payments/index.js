import React from 'react'
import { Button, Tabs, Typography } from 'antd';
import PaymentByPatients from './PaymentByPateints'
import PaymentByTranscations from './PaymentByTranscations'
import PageHeader from '../../components/PageHeader';
const Payments = () => {

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <PageHeader
                title='Payments'
                extra={<>
                    <Button type="primary">Export </Button>
                </>}
            />
            <Tabs
                defaultActiveKey="1"
                onChange={onChange}
                items={[
                    {
                        label: `Transactions`,
                        key: '1',
                        children: <PaymentByTranscations />,
                    },
                    {
                        label: `Patients`,
                        key: '2',
                        children: <PaymentByPatients />,
                    },
                ]}
            />
        </>
    )
}

export default Payments