import { Col, Descriptions, Divider, Row, Space, Tag, Typography } from 'antd'
import React from 'react'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LocationDrop from '../../../../svg/LocationDrop'
import CardDescription from '../../../../components/CardDescription'
import Card from '../../../../components/Card'

import Phone from '../../../../svg/Phone'
import Mail from '../../../../svg/Mail'
import Notes from '../../../../svg/Notes'
import Stethoscope from '../../../../svg/Stethoscope'
import FaceFrown from '../../../../svg/FaceFrown'
import VenusMars from '../../../../svg/VenusMars'


const { Text, Link, Title } = Typography


const PatientInfo = () => {
    return (
        <Card>
            <Title level={1} style={{ margin: '0px 8px' }}>Aadil Shaikh</Title>
            <Typography.Title level={5} type='secondary' style={{ margin: '0px 8px' }}>
                Male, 57 years
            </Typography.Title>

            <CardDescription
                title='Location'
                icon={<LocationDrop />}
                description='Vadodara'
            />
            <CardDescription
                title='Phone'
                icon={<Phone />}
                description='91-9426112175, +91-9426457531'
            />
            <CardDescription
                title='Email'
                icon={<Mail />}
                description='aadil.shaikh@yopmail.com'
            />

            <Divider />
            <CardDescription
                title='Created By'
                // icon={<Mail />}
                description='Dr. Zuber Shaikh'
            />
            <CardDescription
                title='Created on'
                // icon={<Mail />}
                description='23 Feb 2023'
            />
        </Card >
    )
}

export default PatientInfo
