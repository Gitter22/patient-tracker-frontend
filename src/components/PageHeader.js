import { Col, Row, Space, Typography } from 'antd'
import React from 'react'
import Box from './Box'
import styles from './pageheader.module.css'
const containerstyle = {
    padding: '16px 8px',
    // margin: '8px 0px',
    boxSizing: 'border-box'
}
const titlestyle = { margin: 0, display: "inline-block" }

const PageHeader = ({ title, level = 3, extra }) => {
    return (
        <Box
            classname={styles.header}
            style={containerstyle}
        >
            <Row justify='space-between' >
                <Col>
                    <Typography.Title
                        level={level}
                        style={titlestyle}
                    >
                        {title}
                    </Typography.Title>
                </Col>
                <Col
                >
                    <Space align='end'>
                        {extra}
                    </Space>
                </Col>
            </Row>
        </Box >
    )
}

export default PageHeader