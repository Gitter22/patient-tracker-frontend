import { Space, Typography } from 'antd'
import React from 'react'

const containerstyle = { display: "flex", justifyContent: "space-between" }
const titlestyle = { margin: 0, display: "inline-block" }
const extracontainerstyle = { display: "flex" }

const PageHeader = ({ title, level = 3, extra }) => {
    return (
        <div style={containerstyle}>
            <div>
                <Space>
                    {/* <Button>Back</Button> */}
                    <Typography.Title level={level} style={titlestyle}>{title}</Typography.Title>
                </Space>
            </div>
            <div style={extracontainerstyle}>
                <Space>
                    {extra}
                </Space>

            </div>
        </div>
    )
}

export default PageHeader