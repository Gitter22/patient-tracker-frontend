import React from 'react'
import { Button, Tabs, Typography } from 'antd'
import OverviewTab from './components/OverviewTab'
import SessionsTab from './components/Sessions/SessionsTab'
import BiometricsTab from './components/BiometricsTab'
import DietTrackerTab from './components/DietTrackerTab'
import TrackerTab from './components/Tracker/TrackerTab'
import LogsTab from './components/LogsTab'
import PageHeader from '../../components/PageHeader'
import Box from '../../components/Box'


const PatientView = () => {

    const onChange = (key) => {
        console.log(key);
    };
    return (
        <>
            <PageHeader
                title='Patient Detail'
                extra={<>
                    <Button type="primary">Assign Plan</Button>
                    <Button>Call</Button>
                </>}
            />
            <Box
                style={{
                    padding: '8px 8px',
                    margin: '8px',
                    backgroundColor: ''
                }}>
                <Tabs
                    tabBarStyle={{ margin: '8px 0px', backgroundColor: '#fff' }}
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
                            label: `Sessions`,
                            key: '3',
                            children: <SessionsTab />,
                        },
                        {
                            label: `Tracker`,
                            key: '5',
                            children: <TrackerTab />,
                        },
                        {
                            label: `Biometrics`,
                            key: '2',
                            children: <BiometricsTab />,
                        },
                        {
                            label: `Logs`,
                            key: '6',
                            children: <LogsTab />,
                        },
                    ]}
                />
            </Box>
        </>

    )
}

export default PatientView