import React from 'react'
import { Layout } from 'antd';

const { Content: AntContent } = Layout;

const Box = ({ children, style }) => {
    return (
        <AntContent style={{
            backgroundColor: '#fff',
            boxSizing: 'border-box',
            ...style
        }}>
            {children}
        </AntContent>
    )
}

export default Box