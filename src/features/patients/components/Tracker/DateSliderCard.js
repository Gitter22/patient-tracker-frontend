import React from 'react'
import dayjs from 'dayjs'
import { getDayOfWeek } from '../../support'
import { Card } from 'antd'


const DateSliderCard = ({ date, onClick }) => {
    return (
        <Card bordered={false} onClick={onClick} style={{ width: 150, cursor: 'pointer' }}>
            <div className="date-box" style={{ backgroundColor: '#fff' }}>
                <h3>
                    {dayjs(date).format('DD')}
                    <span className="month"> {dayjs(date).format('MMM')}</span>
                </h3>
                <span>{getDayOfWeek(date)}</span>
                {/* <p className="available-shift-no">
                {assignedCountList.find(
                    (data) => data.Date === date.format("DD-MM-YYYY")
                )?.Shifts?.total || 0}
            </p> */}
            </div>
        </Card>
    )
}

export default DateSliderCard