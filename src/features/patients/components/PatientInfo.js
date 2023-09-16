import { Card, Divider, Space, Tag, Typography } from 'antd'
import React from 'react'
import { MailOutlined, PhoneOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LocationDrop from '../../../svg/LocationDrop'
import CardDescription from '../../../components/CardDescription'
import Phone from '../../../svg/Phone'
import Mail from '../../../svg/Mail'
import Notes from '../../../svg/Notes'
import Stethoscope from '../../../svg/Stethoscope'
import FaceFrown from '../../../svg/FaceFrown'
import VenusMars from '../../../svg/VenusMars'

const { Text, Link, Title } = Typography


const PatientInfo = () => {
    return (
        <Card title='Basic details' >
            <div style={{ display: "flex", alignItems: "center", paddingLeft: 12 }}>
                <Title level={2} >Aadil Shaikh</Title>
                <Tag color='success'>Active</Tag>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ flex: '50%' }}>
                    {/* <div style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}> */}
                    <CardDescription
                        title='Gender/Age'
                        icon={<VenusMars />}
                        description='Male, 57 years'
                    />
                    <CardDescription
                        title='Location'
                        icon={<LocationDrop />}
                        description='Vadodara, Gujarat'
                    />
                </div>
                <div style={{ flex: '50%' }}>
                    <CardDescription
                        title='Contact'
                        icon={<Phone />}
                        description='+91-9426112175, +91-9426457531'
                    />
                    <CardDescription
                        title='E-mail'
                        icon={<Mail />}
                        description='aadil.shaikh@yopmail.com'
                    />
                </div>
            </div>
            <Divider />
            <CardDescription
                title='Complaints'
                icon={<FaceFrown />}
                description='Extreme pain in lower back, difficulty in getting standing back'
            />
            <CardDescription
                title='Assessment'
                icon={<Stethoscope />}
                description=' Weak muscles, inactivity, weak core. Need strength training for atleast 6 months'
            />
        </Card >
    )
}

export default PatientInfo