import React from 'react'
import { Layout } from 'antd';

const { Content } = Layout;

const Box = ({ children, style }) => {
    return (
        <Content style={{
            boxSizing: 'border-box',
            ...style
        }}>
            {children}
        </Content>
    )
}


const White = ({ children, style }) => {
    return (
        <Box style={{ backgroundColor: '#fff', ...style }}>
            {children}
        </Box>
    )
}





Box.WhiteBox = White

export default Box