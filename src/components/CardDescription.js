import React from "react"
import { Typography } from 'antd'

const { Text, Link, Title } = Typography

const CardDescription = ({ size = 'small', title, description, children, icon }) => {
    const sizeProps = {
        iconSize: size === 'small' ? 16 : 20,
        titleSize: size === 'small' ? 5 : 4,
        detailFontSize: size === 'small' ? 16 : 14
    }
    return (<>
        <div style={{ padding: 12, marging: 8, paddingTop: 0 }}>
            <div style={{ display: "flex", alignItems: 'center', }}>
                {icon ? React.cloneElement(icon, { size: sizeProps.iconSize }) : null}
                <Title level={sizeProps.titleSize} style={{ marginBottom: 5, marginLeft: 10 }}>{title} </Title>
            </div>
            {description
                ? <Text style={{ fontSize: sizeProps.detailFontSize }}>{description}</Text>
                : children}
        </div>
    </>
    )
}

export default CardDescription