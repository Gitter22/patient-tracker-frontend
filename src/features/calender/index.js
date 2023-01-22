import React from 'react'
import { Badge, Button, Calendar, Space, Tag, Typography } from 'antd';
import PageHeader from '../../components/PageHeader';
// import { Calendar, momentLocalizer } from 'react-big-calendar'
const getListData = (value) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                {
                    type: 'warning',
                    content: 'Sidhdharth Malhotra 7pm-8pm',
                },
                {
                    type: 'success',
                    content: 'Salman Khan',
                },
            ];
            break;
        case 10:
            listData = [
                {
                    type: 'warning',
                    content: 'Cristiano Ronaldo',
                },
                {
                    type: 'success',
                    content: 'Hritik Roshan',
                },
                {
                    type: 'error',
                    content: 'Govinda',
                },
            ];
            break;
        case 15:
            listData = [
                {
                    type: 'warning',
                    content: 'Virat Kohli',
                },
                {
                    type: 'success',
                    content: 'Subramanium Swamy',
                },
                {
                    type: 'error',
                    content: 'Adnan Sami',
                },
                {
                    type: 'error',
                    content: 'Gabbar Singh',
                },
                {
                    type: 'error',
                    content: 'Thakur',
                },
                {
                    type: 'error',
                    content: 'Ajay Devgan',
                },
            ];
            break;
        default:
    }
    return listData || [];
};
const getMonthData = (value) => {
    if (value.month() === 8) {
        return 1394;
    }
};

const Calender = () => {

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content} onClick={() => console.log("clickeed")}>
                        <Tag> <Badge status={item.type} text={item.content} /></Tag>
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <>
            <PageHeader
                title='Calendar'
                extra={<>
                    <Button type="primary">Cancel</Button>
                    <Button>Save</Button>
                </>}
            />

            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
            {/* <Calendar
                // localizer={localizer}
                // events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }} */}
            />
        </>
    )
}

export default Calender