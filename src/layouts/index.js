import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PhoneOutlined,
    UserOutlined,
    FundOutlined,
    CalendarOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const { token: { colorBgContainer }, } = theme.useToken();
    console.log("🚀 ~ file: index.js:17 ~ App ~ colorBgContainer", colorBgContainer)

    const [header, setHeader] = useState('')

    const handleSideMenuClick = (e) => {
        console.log(e)
        navigate(`/${e.key}`)
        setHeader(e.label)
    }

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div style={{ color: "white", padding: "15px" }}>
                    Patient Tracker logo
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={handleSideMenuClick}
                    items={[
                        {
                            key: 'calender',
                            icon: <CalendarOutlined />,
                            label: 'Calender',
                        },
                        {
                            key: 'patients',
                            icon: <UserOutlined />,
                            label: 'Patients',
                        },
                        {
                            key: 'diets',
                            icon: <UserOutlined />,
                            label: 'Diets',
                        },
                        {
                            key: 'Exercises',
                            icon: <UserOutlined />,
                            label: 'Exercises',
                        },
                        {
                            key: 'treatment-plans',
                            icon: <UserOutlined />,
                            label: 'Treatment Plans',
                        },
                        {
                            key: 'payments',
                            icon: <FundOutlined />,
                            label: 'Payments',
                        },
                        {
                            key: 'inquiries',
                            icon: <PhoneOutlined />,
                            label: 'Inquiries',
                        },
                    ]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    {header}
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: "88vh",
                        background: colorBgContainer,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;