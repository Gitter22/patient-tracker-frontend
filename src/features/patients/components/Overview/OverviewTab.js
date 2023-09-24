import { Card, Col, Divider, Row, Space, Tabs, Tag, Typography } from 'antd'
import React from 'react'
import LifestyleInfo from './LifestyleInfo'
import PatientInfo from './PatientInfo'
import TreatmentStatus from '../TreatmentStatus'
import PlansTable from './PlansTable'
import TransactionsTable from './TransactionsTable'

const onChange = () => {

}
const OverviewTab = () => {
    return (
        <>
            <Row gutter={[16, 16]}>
                <Col xl={8} md={24}>
                    <PatientInfo />
                </Col>
                <Col xl={16} md={24}>
                    <LifestyleInfo />
                </Col>
                <Col xl={24} md={24}>
                    <TreatmentStatus />
                </Col>
            </Row>
            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Tabs
                        tabBarStyle={{ margin: '8px 0px', padding: '0 8px', backgroundColor: '#fff' }}
                        defaultActiveKey="1"
                        onChange={onChange}
                        items={[
                            {
                                label: `Plans`,
                                key: '1',
                                children: <PlansTable />,
                            },
                            {
                                label: `Transactions`,
                                key: '2',
                                children: <TransactionsTable />,
                            },
                        ]}
                    />
                </Col>
            </Row>
        </>
    )
}

export default OverviewTab

