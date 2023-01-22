import React from 'react'
import { Button, Tabs, Typography } from 'antd'
import OverviewTab from './components/OverviewTab'
import SessionsTab from './components/SessionsTab'
import BiometricsTab from './components/BiometricsTab'
import DietTrackerTab from './components/DietTrackerTab'
import ExerciseTrackerTab from './components/ExerciseTrackerTab'
import LogsTab from './components/LogsTab'
import PageHeader from '../../components/PageHeader'


const PatientView = () => {

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <PageHeader
                title='Patient Detail'
                extra={<>
                    <Button type="primary">Cancel</Button>
                    <Button>Save</Button>
                </>}
            />
            <Tabs
                defaultActiveKey="1"
                centered
                onChange={onChange}
                items={[
                    {
                        label: `Overview`,
                        key: '1',
                        children: <OverviewTab />,
                    },
                    {
                        label: `Biometrics`,
                        key: '2',
                        children: <BiometricsTab />,
                    },
                    {
                        label: `Sessions`,
                        key: '3',
                        children: <SessionsTab />,
                    },
                    {
                        label: `Diet`,
                        key: '4',
                        children: <DietTrackerTab />,
                    },
                    {
                        label: `Exercise`,
                        key: '5',
                        children: <ExerciseTrackerTab />,
                    },
                    {
                        label: `Logs`,
                        key: '6',
                        children: <LogsTab />,
                    },
                ]}
            />
        </>

    )
}

export default PatientView