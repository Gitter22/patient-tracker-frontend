import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, List, Skeleton, Typography } from 'antd';
import PageHeader from '../../components/PageHeader';


const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];

const Plans = () => {


    return (
        <>
            <PageHeader
                title='Plans'
                extra={<>
                    <Button type="primary">Export </Button>
                </>}
            />

            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                    </List.Item>
                )}
            />
        </>
    )
}

export default Plans
