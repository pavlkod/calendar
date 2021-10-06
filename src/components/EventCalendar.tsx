import { Badge, Calendar } from 'antd'
import { Moment } from 'moment';
import React, { FC } from 'react'
import { IEvent } from '../models/IEvent'
import { formatDate } from '../utils/date';

interface EventCalendarProps{
    events: IEvent[]
}

const EventCalendar: FC<EventCalendarProps> = (props) => {
    function dateCellRender(value: Moment) {
        const formatedDate = formatDate(value.toDate())
        const currentDates = props.events.filter(event => event.date === formatedDate)
        return (
            <div className="events">
                {currentDates.map((item,i) => (
                    <div key={i}>
                        <Badge status="success" text={item.description} />
                    </div>
                ))}
            </div>
        );
    }
    
    return (
        <Calendar dateCellRender={dateCellRender}/>
    )
}

export default EventCalendar
