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
        {/* <div style={{ padding: 12, margin: 8, paddingTop: 0 }}>
            <div style={{ display: "flex", alignItems: 'center', }}>
                {icon ? React.cloneElement(icon, { size: sizeProps.iconSize }) : null}
                <Title level={sizeProps.titleSize} style={{ marginBottom: 5, marginLeft: 10 }}>{title} </Title>
            </div>
            {description
                ? <Text style={{ fontSize: sizeProps.detailFontSize }}>{description}</Text>
                : children}
        </div> */}

        <div style={{ display: 'flex', alignItems: 'center', margin: '8px 0px', boxSizing: 'border-box' }}>
            {icon ?
                <div>
                    {React.cloneElement(icon, {
                        size: 24,
                        // fill: 'gray'
                    })}
                </div>
                : null}
            <div style={{ marginLeft: icon ? '8px' : null }}>
                <Typography.Text
                    style={{ display: 'block', margin: '0px', fontSize: 14, }} type='secondary' strong>
                    {title}
                </Typography.Text>
                {typeof description === 'string'
                    ? <Typography.Text style={{ display: 'block', margin: '0px', fontSize: 16 }} >
                        {description}
                    </Typography.Text>
                    : children
                }
            </div>
        </div>
    </>
    )
}

export default CardDescription