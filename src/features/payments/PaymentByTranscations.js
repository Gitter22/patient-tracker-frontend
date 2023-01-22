import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';



const PaymentByTranscations = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);


    return (

        <List
            dataSource={data}
            renderItem={(item) => (
                <List.Item key={item.email}>
                    <List.Item.Meta
                        avatar={<Avatar src={item.picture.large} />}
                        title={<a href="https://ant.design">{item.name.last}</a>}
                        description={item.email}
                    />
                    <div>Content</div>
                </List.Item>
            )}
        />
    );
};
export default PaymentByTranscations;