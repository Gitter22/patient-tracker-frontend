import React from 'react'
import { Button, Card, List, Typography } from 'antd';
import PageHeader from '../../components/PageHeader';

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];

const { Meta } = Card;

const Diets = () => {
    return (
        <>
            <PageHeader
                title='Diets'
                extra={<>
                    <Button type="primary">Cancel</Button>
                    <Button>Save</Button>
                </>}
            />
            <List
                grid={{
                    gutter: 8,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 4,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" height={200} />}
                        >
                            <Meta title="Breakfast" description="www.instagram.com" />
                        </Card>
                    </List.Item>
                )}
            />
        </>
    )
}

export default Diets